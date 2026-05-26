import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from '../context/useAuth';
import { getMesas, crearMesa, eliminarMesa } from '../services/mesaService';
import { getOrdenes } from '../services/ordenService';
import {
    getUsuarios,
    crearUsuario,
    eliminarUsuario,
    getCartas,
    crearPlato,
    eliminarPlato,
    resetDemo,
    getJornadaActual,
    abrirNegocio,
    cerrarNegocio,
    getVentas,
    getActividades
} from '../services/adminService';
import Mesero from './Mesero';
import Cocinero from './Cocinero';
import Cajero from './Cajero';

interface Mesa { id_mesa: number; estado: string; }
interface Orden { id_orden: number; estado: string; precio_total: string; fecha_hora: string; }
interface Usuario { id_usuario: number; nombre: string; rol: string; correo: string; }
interface Plato { id_plato: number; nombre: string; precio: string; stock: number; }
interface Jornada { id: number; fecha_apertura: string; fecha_cierre?: string | null; estado: 'abierto' | 'cerrado'; }
interface Venta { id: number; monto: string; metodo_pago: string; fecha: string; }
interface Actividad { id: number; tipo: string; descripcion: string; fecha: string; }
interface ResumenCierre { totalVendido: number; ordenesCompletadas: number; }

type Seccion = 'dashboard' | 'usuarios' | 'carta' | 'demo';
type DemoRol = 'mesero' | 'cocinero' | 'cajero' | null;

const esDeHoy = (fecha: string) => {
    const valor = new Date(fecha);
    const hoy = new Date();

    return valor.getFullYear() === hoy.getFullYear()
        && valor.getMonth() === hoy.getMonth()
        && valor.getDate() === hoy.getDate();
};

const hora = (fecha: string) => new Date(fecha).toLocaleTimeString('es-PE', {
    hour: '2-digit',
    minute: '2-digit'
});

const tiempoRelativo = (fecha: string) => {
    const segundos = Math.max(0, Math.floor((Date.now() - new Date(fecha).getTime()) / 1000));
    if (segundos < 60) return 'hace un momento';

    const minutos = Math.floor(segundos / 60);
    if (minutos < 60) return `hace ${minutos} min`;

    const horas = Math.floor(minutos / 60);
    if (horas < 24) return `hace ${horas} h`;

    const dias = Math.floor(horas / 24);
    return `hace ${dias} d`;
};

const iconoActividad = (tipo: string) => {
    if (tipo === 'orden') return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
    );
    if (tipo === 'cocina') return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-orange-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-1.533-3.007A3.75 3.75 0 0 0 12 18Z" />
        </svg>
    );
    if (tipo === 'venta') return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );
    if (tipo === 'jornada') return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-purple-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    );
};

export default function Administrador() {
    const { usuario, logout } = useAuth();
    const [seccion, setSeccion] = useState<Seccion>('dashboard');
    const [demoRol, setDemoRol] = useState<DemoRol>(null);
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [ordenes, setOrdenes] = useState<Orden[]>([]);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [carta, setCarta] = useState<Plato[]>([]);
    const [ventas, setVentas] = useState<Venta[]>([]);
    const [actividades, setActividades] = useState<Actividad[]>([]);
    const [jornada, setJornada] = useState<Jornada | null>(null);
    const [resumenCierre, setResumenCierre] = useState<ResumenCierre | null>(null);
    const [procesandoJornada, setProcesandoJornada] = useState(false);
    const [reiniciandoDemo, setReiniciandoDemo] = useState(false);
    const [mensajeDemo, setMensajeDemo] = useState('');

    const [modalMesas, setModalMesas] = useState(false);
    const [nuevaMesaId, setNuevaMesaId] = useState<number | ''>('');
    const [errorMesas, setErrorMesas] = useState('');

    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', rol: 'mesero', correo: '', contrasena: '' });
    const [nuevoPlato, setNuevoPlato] = useState({ nombre: '', ingredientes: '', precio: 0 });

    const cargarDatosBase = useCallback(async () => {
        const [mesasData, ordenesData, ventasData, actividadesData, jornadaData] = await Promise.all([
            getMesas(),
            getOrdenes(),
            getVentas(),
            getActividades(),
            getJornadaActual()
        ]);

        setMesas(mesasData);
        setOrdenes(ordenesData);
        setVentas(ventasData);
        setActividades(actividadesData);
        setJornada(jornadaData);
    }, []);

    useEffect(() => {
        const iniciar = async () => {
            await cargarDatosBase();

            const usuariosData = await getUsuarios();
            setUsuarios(usuariosData);

            const cartasData = await getCartas();
            setCarta(cartasData);
        };

        iniciar();

        const intervalo = setInterval(() => {
            cargarDatosBase();
        }, 5000);

        return () => clearInterval(intervalo);
    }, [cargarDatosBase]);

    useEffect(() => {
        const socket = io('http://localhost:3000');

        socket.on('nueva_actividad', (nuevaActividad: Actividad) => {
            setActividades(prev => [nuevaActividad, ...prev].slice(0, 10));
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const mesasOcupadas = mesas.filter(m => m.estado !== 'vacia').length;
    const ordenesPendientesCocina = ordenes.filter(o => o.estado === 'pendiente' || o.estado === 'en_preparacion').length;
    const ventasHoy = ventas
        .filter(v => esDeHoy(v.fecha))
        .reduce((acc, v) => acc + parseFloat(v.monto), 0);
    const ultimaActividad = actividades[0];

    const cambiarSeccion = (nuevaSeccion: Seccion) => {
        setSeccion(nuevaSeccion);
        if (nuevaSeccion !== 'demo') setDemoRol(null);
    };

    const handleAbrirNegocio = async () => {
        setProcesandoJornada(true);
        setResumenCierre(null);
        try {
            await abrirNegocio();
            await cargarDatosBase();
        } catch {
            alert('No se pudo abrir el negocio');
        } finally {
            setProcesandoJornada(false);
        }
    };

    const handleCerrarNegocio = async () => {
        setProcesandoJornada(true);
        try {
            const respuesta = await cerrarNegocio();
            setResumenCierre(respuesta.resumen);
            await cargarDatosBase();
        } catch {
            alert('No se pudo cerrar el negocio');
        } finally {
            setProcesandoJornada(false);
        }
    };

    const handleResetDemo = async () => {
        setReiniciandoDemo(true);
        setMensajeDemo('');
        try {
            await resetDemo();
            await cargarDatosBase();
            getUsuarios().then(setUsuarios);
            getCartas().then(setCarta);
            setDemoRol(null);
            setResumenCierre(null);
            setMensajeDemo('Demo reiniciada correctamente');
        } catch {
            setMensajeDemo('No se pudo reiniciar la demo');
        } finally {
            setReiniciandoDemo(false);
        }
    };

    const handleCrearUsuario = async () => {
        await crearUsuario(nuevoUsuario);
        getUsuarios().then(setUsuarios);
        setNuevoUsuario({ nombre: '', rol: 'mesero', correo: '', contrasena: '' });
    };

    const handleEliminarUsuario = async (id: number) => {
        await eliminarUsuario(id);
        getUsuarios().then(setUsuarios);
    };

    const handleCrearPlato = async () => {
        await crearPlato(nuevoPlato);
        getCartas().then(setCarta);
        setNuevoPlato({ nombre: '', ingredientes: '', precio: 0 });
    };

    const siguienteMesaSugerida = () => {
        const ids = mesas.map(m => m.id_mesa);
        let next = 1;

        while (ids.includes(next)) {
            next++;
        }

        return next;
    };

    const handleCrearMesa = async () => {
        setErrorMesas('');

        const id = Number(nuevaMesaId || siguienteMesaSugerida());

        if (!Number.isInteger(id) || id <= 0) {
            setErrorMesas('El número de mesa debe ser mayor a 0');
            return;
        }

        if (mesas.some(m => m.id_mesa === id)) {
            setErrorMesas('Ya existe una mesa con ese número');
            return;
        }

        try {
            await crearMesa(id);

            await cargarDatosBase();

            setNuevaMesaId('');
        } catch (error) {
            console.error(error);
            setErrorMesas('Error creando mesa');
        }
    };

    const handleEliminarMesa = async (id: number) => {
        try {
            await eliminarMesa(id);

            await cargarDatosBase();
        } catch (error) {
            console.error(error);
            setErrorMesas('Error eliminando mesa');
        }
    };

    const handleEliminarPlato = async (id: number) => {
        await eliminarPlato(id);
        getCartas().then(setCarta);
    };

    const navItems: { id: Seccion; label: string; icon: React.ReactNode }[] = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            )
        },
        {
            id: 'usuarios',
            label: 'Personal',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
            )
        },
        {
            id: 'carta',
            label: 'Carta',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
            )
        },
        {
            id: 'demo',
            label: 'Modo demo',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.454 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
            )
        },
    ];

    const getSaludo = () => {
        const horaActual = new Date().getHours();
        if (horaActual < 12) return 'Buenos días';
        if (horaActual < 18) return 'Buenas tardes';
        return 'Buenas noches';
    };

    const fechaActual = new Date().toLocaleDateString('es-PE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const renderResetDemo = () => (
        <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5 shadow-sm transition-all duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="text-sm font-bold text-[#0A0A0A]">Reiniciar datos de prueba</p>
                    <p className="mt-1 text-sm text-[#6B7280]">Cierra la jornada abierta, reinicia migraciones y ejecuta el seed.</p>
                    {mensajeDemo && (
                        <p className={`mt-2 text-sm font-medium ${mensajeDemo.includes('correctamente') ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                            {mensajeDemo}
                        </p>
                    )}
                </div>
                <button
                    onClick={handleResetDemo}
                    disabled={reiniciandoDemo}
                    className="min-h-12 rounded-2xl bg-[#171717] px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-black hover:shadow-lg disabled:opacity-50"
                >
                    {reiniciandoDemo ? 'Reiniciando...' : 'Reiniciar demo'}
                </button>
            </div>
        </div>
    );

    const renderDemo = () => {
        if (demoRol === 'mesero') {
            return (
                <div className="space-y-5 animate-in fade-in duration-300">
                    <button onClick={() => setDemoRol(null)} className="rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm font-semibold transition-all duration-200 hover:bg-[#F7F7F7]">Volver a modo demo</button>
                    {renderResetDemo()}
                    <Mesero modoDemo />
                </div>
            );
        }
        if (demoRol === 'cocinero') {
            return (
                <div className="space-y-5 animate-in fade-in duration-300">
                    <button onClick={() => setDemoRol(null)} className="rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm font-semibold transition-all duration-200 hover:bg-[#F7F7F7]">Volver a modo demo</button>
                    {renderResetDemo()}
                    <Cocinero modoDemo />
                </div>
            );
        }
        if (demoRol === 'cajero') {
            return (
                <div className="space-y-5 animate-in fade-in duration-300">
                    <button onClick={() => setDemoRol(null)} className="rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm font-semibold transition-all duration-200 hover:bg-[#F7F7F7]">Volver a modo demo</button>
                    {renderResetDemo()}
                    <Cajero modoDemo />
                </div>
            );
        }

        return (
            <div className="animate-in fade-in duration-300">
                <div className="mb-6">
                    <p className="text-sm font-medium text-[#6B7280]">Simulación</p>
                    <h2 className="mt-1 text-3xl font-extrabold tracking-tight">Modo demo</h2>
                </div>
                <div className="mb-6">{renderResetDemo()}</div>
                <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
                    <button onClick={() => setDemoRol('mesero')} className="rounded-3xl border border-[#E4E4E4] bg-white p-6 text-left shadow-sm transition-all duration-200 hover:bg-[#F7F7F7] hover:shadow-md">
                        <span className="text-sm font-medium text-[#6B7280]">Mobile</span>
                        <span className="mt-2 block text-xl font-extrabold">Ver como mesero</span>
                    </button>
                    <button onClick={() => setDemoRol('cocinero')} className="rounded-3xl border border-[#E4E4E4] bg-white p-6 text-left shadow-sm transition-all duration-200 hover:bg-[#F7F7F7] hover:shadow-md">
                        <span className="text-sm font-medium text-[#6B7280]">KDS</span>
                        <span className="mt-2 block text-xl font-extrabold">Ver como cocinero</span>
                    </button>
                    <button onClick={() => setDemoRol('cajero')} className="rounded-3xl border border-[#E4E4E4] bg-white p-6 text-left shadow-sm transition-all duration-200 hover:bg-[#F7F7F7] hover:shadow-md">
                        <span className="text-sm font-medium text-[#6B7280]">Caja</span>
                        <span className="mt-2 block text-xl font-extrabold">Ver como cajero</span>
                    </button>
                    <button onClick={() => cambiarSeccion('dashboard')} className="rounded-3xl bg-[#171717] p-6 text-left text-white shadow-sm transition-all duration-200 hover:bg-black hover:shadow-md">
                        <span className="text-sm font-medium text-white/60">Admin</span>
                        <span className="mt-2 block text-xl font-extrabold">Volver a admin</span>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen bg-[#F7F7F7] text-[#0A0A0A] font-['Geist']">
            {/* Sidebar Minimalista */}
            <aside className="sticky top-0 z-40 hidden h-screen w-20 shrink-0 border-r border-[#E4E4E4] bg-white p-4 lg:block overflow-visible">
                <div className="mb-10 flex h-12 items-center justify-center rounded-2xl border border-[#E4E4E4] bg-[#F7F7F7] p-2 shadow-sm transition-all duration-300 hover:shadow-md">
                    <p className="text-xl font-black tracking-tighter">R</p>
                </div>
                <nav className="flex flex-col items-center gap-6">
                    {navItems.map(item => (
                        <div key={item.id} className="group relative">
                            <button
                                onClick={() => cambiarSeccion(item.id)}
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${seccion === item.id ? 'bg-[#171717] text-white shadow-lg shadow-black/10 scale-110' : 'text-[#A1A1AA] hover:bg-[#F7F7F7] hover:text-[#0A0A0A] hover:shadow-sm'}`}
                            >
                                {item.icon}
                            </button>
                            {/* Tooltip Estilo Intellecta */}
                            <div className="absolute left-16 top-1/2 -translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                                <div className="bg-[#171717] text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl whitespace-nowrap shadow-xl">
                                    {item.label}
                                    {/* Flecha del tooltip */}
                                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-[#171717]"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>

            <div className="flex flex-1 flex-col min-w-0">
                <header className="sticky top-0 z-30 border-b border-[#E4E4E4] bg-white/80 px-6 py-6 backdrop-blur-xl lg:px-10 transition-all duration-300">
                    <div className="flex items-center justify-between gap-4">
                        <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                            <p className="text-sm font-bold text-[#6B7280] tracking-tight">{getSaludo()}, {usuario?.nombre.split(' ')[0]}</p>
                            <h1 className="mt-1 text-xs font-black text-[#A1A1AA] uppercase tracking-[0.2em]">{fechaActual}</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={logout} className="group flex items-center gap-2 rounded-2xl border border-[#E4E4E4] px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#171717] hover:text-white hover:shadow-lg hover:shadow-black/5 active:scale-95">
                                <span>Cerrar sesión</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="p-6 lg:p-10 max-w-[1600px]">
                    {seccion === 'dashboard' && (
                        <div className="animate-in fade-in duration-300">
                            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-[#6B7280]">Estado en tiempo real</p>
                                    <h2 className="mt-1 text-3xl font-extrabold tracking-tight">Dashboard</h2>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleAbrirNegocio}
                                        disabled={!!jornada || procesandoJornada}
                                        className="rounded-2xl bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-700 hover:shadow-lg disabled:opacity-50"
                                    >
                                        Abrir negocio
                                    </button>
                                    <button
                                        onClick={handleCerrarNegocio}
                                        disabled={!jornada || procesandoJornada}
                                        className="rounded-2xl bg-[#DC2626] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 hover:shadow-lg disabled:opacity-50"
                                    >
                                        Cerrar negocio
                                    </button>
                                </div>
                            </div>

                            <div className="mb-8 rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${jornada ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615 3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615M3.75 9.349V6.908c0-.43.56-.624.814-.29L6.339 8.7a3.033 3.033 0 0 0 4.19 0l1.725-2.083a3.033 3.033 0 0 1 4.19 0l1.725 2.083a3.033 3.033 0 0 0 4.19 0l1.775-2.083c.254-.334.814-.14.814.29V9.35M3.75 21h16.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-[#6B7280]">Estado del negocio</p>
                                            <p className="text-lg font-bold">{jornada ? `Abierto desde las ${hora(jornada.fecha_apertura)}` : 'Negocio cerrado'}</p>
                                        </div>
                                    </div>
                                    <span className={`rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${jornada ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {jornada ? 'Operativo' : 'Fuera de servicio'}
                                    </span>
                                </div>
                            </div>

                            {resumenCierre && (
                                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                                        <p className="text-sm font-medium text-[#6B7280]">Total vendido al cierre</p>
                                        <p className="mt-2 text-4xl font-extrabold tracking-tight">S/ {resumenCierre.totalVendido.toFixed(2)}</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                                        <p className="text-sm font-medium text-[#6B7280]">Órdenes completadas</p>
                                        <p className="mt-2 text-4xl font-extrabold tracking-tight">{resumenCierre.ordenesCompletadas}</p>
                                    </div>
                                </div>
                            )}

                            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                                <div className="flex items-center justify-between rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-[#6B7280]">Ventas de hoy</p>
                                        <p className="text-2xl font-extrabold tracking-tight">S/ {ventasHoy.toFixed(0)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615 3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615M3.75 9.349V6.908c0-.43.56-.624.814-.29L6.339 8.7a3.033 3.033 0 0 0 4.19 0l1.725-2.083a3.033 3.033 0 0 1 4.19 0l1.725 2.083a3.033 3.033 0 0 0 4.19 0l1.775-2.083c.254-.334.814-.14.814.29V9.35M3.75 21h16.5" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-[#6B7280]">Mesas activas</p>
                                        <p className="text-2xl font-extrabold tracking-tight">{mesasOcupadas}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-[#6B7280]">Cocina</p>
                                        <p className="text-2xl font-extrabold tracking-tight">{ordenesPendientesCocina}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-[#6B7280]">Última actividad</p>
                                        <p className="text-sm font-bold truncate max-w-[120px]">{ultimaActividad ? ultimaActividad.tipo : 'Ninguna'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_380px]">
                                <section className="relative rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold">Estado de las mesas</h3>
                                            <p className="text-sm text-[#6B7280]">Monitor visual del salón</p>
                                        </div>

                                        <button
                                            onClick={() => setModalMesas(true)}
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E4E4] bg-white text-[#6B7280] transition-all duration-200 hover:bg-[#F7F7F7] hover:text-[#0A0A0A] hover:shadow-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.59c1.756.427 1.756 2.925 0 3.351a1.724 1.724 0 00-1.066 2.591c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.59 1.065c-.427 1.756-2.925 1.756-3.351 0a1.724 1.724 0 00-2.591-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.59c-1.756-.427-1.756-2.925 0-3.351a1.724 1.724 0 001.066-2.591c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.591-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-5">
                                        {mesas.map(mesa => (
                                            <div
                                                key={mesa.id_mesa}
                                                className={`group relative flex flex-col items-center justify-center rounded-2xl border p-5 text-center transition-all duration-200
                                                ${mesa.estado === 'vacia' ? 'border-green-100 bg-green-50/30 text-green-700' :
                                                    mesa.estado === 'ocupada' ? 'border-red-100 bg-red-50/30 text-red-700' :
                                                        mesa.estado === 'lista' ? 'border-blue-100 bg-blue-50/30 text-blue-700' :
                                                            'border-amber-100 bg-amber-50/30 text-amber-700'}`}
                                            >
                                                <span className="text-xs font-bold uppercase tracking-wider opacity-60">{mesa.estado}</span>
                                                <span className="mt-1 text-2xl font-black">{mesa.id_mesa}</span>

                                                <button
                                                    onClick={() => handleEliminarMesa(mesa.id_mesa)}
                                                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-[#E4E4E4] text-[#DC2626] opacity-0 shadow-sm transition-all duration-200 group-hover:opacity-100 hover:bg-red-50"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="rounded-3xl border border-[#E4E4E4] bg-white shadow-sm overflow-hidden">
                                    <div className="border-b border-[#E4E4E4] p-6">
                                        <h3 className="font-bold">Actividad reciente</h3>
                                        <p className="text-sm text-[#6B7280]">Eventos del sistema hoy</p>
                                    </div>
                                    {actividades.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                                            <p className="text-sm text-[#6B7280]">No hay actividad registrada aún.</p>
                                        </div>
                                    ) : (
                                        <div className="max-h-[600px] divide-y divide-[#E4E4E4] overflow-y-auto">
                                            {actividades.map(actividad => (
                                                <div key={actividad.id} className="flex items-start gap-4 p-5 transition-colors hover:bg-[#F7F7F7]">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E4E4E4] shadow-sm">
                                                        {iconoActividad(actividad.tipo)}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-semibold text-[#0A0A0A] leading-snug">{actividad.descripcion}</p>
                                                        <p className="mt-1 text-xs text-[#6B7280] font-medium">{tiempoRelativo(actividad.fecha)}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    )}

                    {seccion === 'usuarios' && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="mb-8 text-3xl font-extrabold tracking-tight">Gestión de Personal</h2>
                            <div className="mb-8 rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm">
                                <h3 className="mb-6 font-bold text-lg">Agregar nuevo colaborador</h3>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Nombre completo</label>
                                        <input placeholder="Ej. Juan Perez" value={nuevoUsuario.nombre} onChange={e => setNuevoUsuario({...nuevoUsuario, nombre: e.target.value})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Rol en el sistema</label>
                                        <select value={nuevoUsuario.rol} onChange={e => setNuevoUsuario({...nuevoUsuario, rol: e.target.value})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]">
                                            <option value="mesero">Mesero</option>
                                            <option value="cocinero">Cocinero</option>
                                            <option value="cajero">Cajero</option>
                                            <option value="administrador">Administrador</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Correo electrónico</label>
                                        <input placeholder="usuario@restaurante.com" value={nuevoUsuario.correo} onChange={e => setNuevoUsuario({...nuevoUsuario, correo: e.target.value})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Contraseña temporal</label>
                                        <input placeholder="••••••••" type="password" value={nuevoUsuario.contrasena} onChange={e => setNuevoUsuario({...nuevoUsuario, contrasena: e.target.value})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]" />
                                    </div>
                                    <button onClick={handleCrearUsuario} className="mt-2 min-h-[52px] rounded-2xl bg-[#171717] text-sm font-semibold text-white transition-all duration-200 hover:bg-black hover:shadow-lg md:col-span-2">
                                        Registrar colaborador
                                    </button>
                                </div>
                            </div>
                            <div className="rounded-3xl border border-[#E4E4E4] bg-white shadow-sm overflow-hidden">
                                <div className="divide-y divide-[#E4E4E4]">
                                    {usuarios.map(u => (
                                        <div key={u.id_usuario} className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-[#F7F7F7]">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white uppercase">
                                                    {u.nombre.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#0A0A0A]">{u.nombre}</p>
                                                    <p className="text-xs text-[#6B7280] font-medium">{u.correo}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border ${u.rol === 'administrador' ? 'border-purple-200 bg-purple-50 text-purple-700' : 'border-[#E4E4E4] bg-[#F7F7F7] text-[#6B7280]'}`}>
                                                    {u.rol}
                                                </span>
                                                <button onClick={() => handleEliminarUsuario(u.id_usuario)} className="rounded-xl p-2 text-[#DC2626] transition-all duration-200 hover:bg-red-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {seccion === 'carta' && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="mb-8 text-3xl font-extrabold tracking-tight">Menú y Carta</h2>
                            <div className="mb-8 rounded-3xl border border-[#E4E4E4] bg-white p-6 shadow-sm">
                                <h3 className="mb-6 font-bold text-lg">Añadir nuevo plato</h3>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Nombre del plato</label>
                                        <input placeholder="Ej. Lomo Saltado Especial" value={nuevoPlato.nombre} onChange={e => setNuevoPlato({...nuevoPlato, nombre: e.target.value})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Precio (S/)</label>
                                        <input placeholder="0.00" type="number" value={nuevoPlato.precio} onChange={e => setNuevoPlato({...nuevoPlato, precio: parseFloat(e.target.value)})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]" />
                                    </div>
                                    <div className="space-y-1 md:col-span-2">
                                        <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Ingredientes o descripción</label>
                                        <input placeholder="Detalla los ingredientes principales..." value={nuevoPlato.ingredientes} onChange={e => setNuevoPlato({...nuevoPlato, ingredientes: e.target.value})} className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]" />
                                    </div>
                                    <button onClick={handleCrearPlato} className="mt-2 min-h-[52px] rounded-2xl bg-[#171717] text-sm font-semibold text-white transition-all duration-200 hover:bg-black hover:shadow-lg md:col-span-2">
                                        Guardar plato en la carta
                                    </button>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#E4E4E4] bg-white shadow-sm overflow-hidden">
                                <div className="max-h-[500px] overflow-y-auto divide-y divide-[#E4E4E4]">
                                    {carta.map(plato => (
                                        <div key={plato.id_plato} className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-[#F7F7F7]">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F7F7] border border-[#E4E4E4]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#6B7280]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#0A0A0A]">{plato.nombre}</p>
                                                    <p className="text-xs text-[#6B7280] font-medium">Categoría general</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <p className="text-lg font-black tracking-tight">S/ {parseFloat(plato.precio).toFixed(2)}</p>
                                                <button onClick={() => handleEliminarPlato(plato.id_plato)} className="rounded-xl p-2 text-[#DC2626] transition-all duration-200 hover:bg-red-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {seccion === 'demo' && renderDemo()}
                </main>
            </div>
            {modalMesas && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200">

                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-bold">Gestión de Salón</h2>

                            <button
                                onClick={() => setModalMesas(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7] text-[#6B7280] transition-all duration-200 hover:bg-[#E4E4E4] hover:text-black"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            Añade nuevas ubicaciones para tus clientes. Las mesas se organizan automáticamente para mantener el orden visual.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#6B7280] uppercase ml-1">Número de Mesa</label>
                                    <input
                                        type="number"
                                        value={nuevaMesaId}
                                        onChange={(e) =>
                                            setNuevaMesaId(e.target.value ? Number(e.target.value) : '')
                                        }
                                        placeholder={`Sugerido: ${siguienteMesaSugerida()}`}
                                        className="w-full rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]"
                                    />
                                </div>

                                {errorMesas && (
                                    <p className="text-xs font-medium text-red-500 ml-1">{errorMesas}</p>
                                )}
                            </div>

                            <button
                                onClick={handleCrearMesa}
                                className="w-full min-h-[52px] rounded-2xl bg-[#171717] text-sm font-semibold text-white transition-all duration-200 hover:bg-black hover:shadow-lg"
                            >
                                Registrar mesa
                            </button>

                            <div className="rounded-2xl bg-[#F7F7F7] p-4 border border-[#E4E4E4]">
                                <div className="flex gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 shrink-0 text-blue-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                    <p className="text-[11px] font-medium text-[#6B7280] leading-relaxed">
                                        Tip: Puedes eliminar mesas existentes pasando el cursor sobre ellas en el panel principal y haciendo clic en la "X".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
