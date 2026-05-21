import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { getMesas } from '../services/mesaService';
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
    if (tipo === 'orden') return 'O';
    if (tipo === 'cocina') return 'K';
    if (tipo === 'venta') return 'V';
    if (tipo === 'jornada') return 'J';
    return 'A';
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
        cargarDatosBase();
        getUsuarios().then(setUsuarios);
        getCartas().then(setCarta);

        const intervalo = setInterval(cargarDatosBase, 5000);
        return () => clearInterval(intervalo);
    }, [cargarDatosBase]);

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

    const handleEliminarPlato = async (id: number) => {
        await eliminarPlato(id);
        getCartas().then(setCarta);
    };

    const navItems: { id: Seccion; label: string; icon: string }[] = [
        { id: 'dashboard', label: 'Dashboard', icon: 'D' },
        { id: 'usuarios', label: 'Personal', icon: 'P' },
        { id: 'carta', label: 'Carta', icon: 'C' },
        { id: 'demo', label: 'Modo demo', icon: 'M' },
    ];

    const renderResetDemo = () => (
        <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
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
                    className="min-h-12 rounded-2xl bg-[#171717] px-5 text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
                >
                    {reiniciandoDemo ? 'Reiniciando...' : 'Reiniciar demo'}
                </button>
            </div>
        </div>
    );

    const renderDemo = () => {
        if (demoRol === 'mesero') {
            return (
                <div className="space-y-5">
                    <button onClick={() => setDemoRol(null)} className="rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm font-semibold hover:bg-[#F7F7F7]">Volver a modo demo</button>
                    {renderResetDemo()}
                    <Mesero modoDemo />
                </div>
            );
        }
        if (demoRol === 'cocinero') {
            return (
                <div className="space-y-5">
                    <button onClick={() => setDemoRol(null)} className="rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm font-semibold hover:bg-[#F7F7F7]">Volver a modo demo</button>
                    {renderResetDemo()}
                    <Cocinero modoDemo />
                </div>
            );
        }
        if (demoRol === 'cajero') {
            return (
                <div className="space-y-5">
                    <button onClick={() => setDemoRol(null)} className="rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm font-semibold hover:bg-[#F7F7F7]">Volver a modo demo</button>
                    {renderResetDemo()}
                    <Cajero modoDemo />
                </div>
            );
        }

        return (
            <div>
                <div className="mb-6">
                    <p className="text-sm font-medium text-[#6B7280]">Simulacion</p>
                    <h2 className="mt-1 text-3xl font-extrabold tracking-tight">Modo demo</h2>
                </div>
                <div className="mb-6">{renderResetDemo()}</div>
                <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
                    <button onClick={() => setDemoRol('mesero')} className="rounded-3xl border border-[#E4E4E4] bg-white p-6 text-left hover:bg-[#F7F7F7]">
                        <span className="text-sm font-medium text-[#6B7280]">Mobile</span>
                        <span className="mt-2 block text-xl font-extrabold">Ver como mesero</span>
                    </button>
                    <button onClick={() => setDemoRol('cocinero')} className="rounded-3xl border border-[#E4E4E4] bg-white p-6 text-left hover:bg-[#F7F7F7]">
                        <span className="text-sm font-medium text-[#6B7280]">KDS</span>
                        <span className="mt-2 block text-xl font-extrabold">Ver como cocinero</span>
                    </button>
                    <button onClick={() => setDemoRol('cajero')} className="rounded-3xl border border-[#E4E4E4] bg-white p-6 text-left hover:bg-[#F7F7F7]">
                        <span className="text-sm font-medium text-[#6B7280]">Caja</span>
                        <span className="mt-2 block text-xl font-extrabold">Ver como cajero</span>
                    </button>
                    <button onClick={() => cambiarSeccion('dashboard')} className="rounded-3xl bg-[#171717] p-6 text-left text-white hover:bg-black">
                        <span className="text-sm font-medium text-white/60">Admin</span>
                        <span className="mt-2 block text-xl font-extrabold">Volver a admin</span>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#F7F7F7] text-[#0A0A0A]">
            <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-[#E4E4E4] bg-white p-4 lg:block">
                <div className="mb-8 rounded-3xl border border-[#E4E4E4] p-4">
                    <p className="text-sm font-medium text-[#6B7280]">Restaurant</p>
                    <p className="mt-1 text-xl font-extrabold">OS</p>
                </div>
                <nav className="space-y-1">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => cambiarSeccion(item.id)}
                            className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-semibold ${seccion === item.id ? 'bg-[#171717] text-white' : 'text-[#6B7280] hover:bg-[#F7F7F7] hover:text-[#0A0A0A]'}`}
                        >
                            <span className={`flex h-8 w-8 items-center justify-center rounded-xl border text-xs ${seccion === item.id ? 'border-white/20 bg-white/10' : 'border-[#E4E4E4] bg-white'}`}>
                                {item.icon}
                            </span>
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            <div className="lg:pl-64">
                <header className="sticky top-0 z-30 border-b border-[#E4E4E4] bg-white/90 px-5 py-4 backdrop-blur lg:px-8">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-[#6B7280]">Panel administrativo</p>
                            <h1 className="text-xl font-extrabold tracking-tight">Restaurant OS</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="hidden text-sm text-[#6B7280] sm:block">{usuario?.nombre}</span>
                            <button onClick={logout} className="rounded-2xl border border-[#E4E4E4] px-4 py-2 text-sm font-semibold hover:bg-[#F7F7F7]">
                                Cerrar sesion
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-2 lg:hidden">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => cambiarSeccion(item.id)}
                                className={`rounded-2xl px-3 py-2 text-xs font-semibold ${seccion === item.id ? 'bg-[#171717] text-white' : 'border border-[#E4E4E4] text-[#6B7280]'}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </header>

                <main className="p-5 lg:p-8">
                    {seccion === 'dashboard' && (
                        <div>
                            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-[#6B7280]">Tiempo real</p>
                                    <h2 className="mt-1 text-3xl font-extrabold tracking-tight">Dashboard</h2>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleAbrirNegocio}
                                        disabled={!!jornada || procesandoJornada}
                                        className="rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
                                    >
                                        Abrir negocio
                                    </button>
                                    <button
                                        onClick={handleCerrarNegocio}
                                        disabled={!jornada || procesandoJornada}
                                        className="rounded-2xl bg-[#DC2626] px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
                                    >
                                        Cerrar negocio
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6 rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-[#6B7280]">Estado del negocio</p>
                                        <p className="mt-1 text-lg font-bold">{jornada ? `Abierto desde ${hora(jornada.fecha_apertura)}` : 'Cerrado'}</p>
                                    </div>
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${jornada ? 'bg-[#16A34A]/10 text-[#16A34A]' : 'bg-[#DC2626]/10 text-[#DC2626]'}`}>
                                        {jornada ? 'Abierto' : 'Cerrado'}
                                    </span>
                                </div>
                            </div>

                            {resumenCierre && (
                                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                        <p className="text-sm text-[#6B7280]">Total vendido al cierre</p>
                                        <p className="mt-2 text-4xl font-extrabold">S/ {resumenCierre.totalVendido.toFixed(2)}</p>
                                    </div>
                                    <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                        <p className="text-sm text-[#6B7280]">Ordenes completadas</p>
                                        <p className="mt-2 text-4xl font-extrabold">{resumenCierre.ordenesCompletadas}</p>
                                    </div>
                                </div>
                            )}

                            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                                <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                    <p className="text-sm text-[#6B7280]">Ventas del dia</p>
                                    <p className="mt-3 text-4xl font-extrabold">S/ {ventasHoy.toFixed(2)}</p>
                                </div>
                                <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                    <p className="text-sm text-[#6B7280]">Mesas activas</p>
                                    <p className="mt-3 text-4xl font-extrabold">{mesasOcupadas}</p>
                                </div>
                                <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                    <p className="text-sm text-[#6B7280]">Pendientes cocina</p>
                                    <p className="mt-3 text-4xl font-extrabold">{ordenesPendientesCocina}</p>
                                </div>
                                <div className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                    <p className="text-sm text-[#6B7280]">Ultima actividad</p>
                                    <p className="mt-3 text-sm font-bold leading-5">{ultimaActividad ? ultimaActividad.descripcion : 'Sin actividad'}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_420px]">
                                <section className="rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                    <h3 className="mb-4 font-bold">Estado de mesas</h3>
                                    <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
                                        {mesas.map(mesa => (
                                            <div key={mesa.id_mesa} className={`rounded-2xl border p-4 text-center text-sm font-extrabold
                                                ${mesa.estado === 'vacia' ? 'border-[#16A34A] bg-[#16A34A]/5 text-[#16A34A]' :
                                                mesa.estado === 'ocupada' ? 'border-[#DC2626] bg-[#DC2626]/5 text-[#DC2626]' :
                                                    mesa.estado === 'lista' ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]' :
                                                        'border-[#D97706] bg-[#D97706]/5 text-[#D97706]'}`}>
                                                {mesa.id_mesa}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="rounded-3xl border border-[#E4E4E4] bg-white">
                                    <div className="border-b border-[#E4E4E4] p-5">
                                        <h3 className="font-bold">Actividad reciente</h3>
                                    </div>
                                    {actividades.length === 0 ? (
                                        <p className="p-5 text-sm text-[#6B7280]">Sin actividad registrada</p>
                                    ) : (
                                        <div className="divide-y divide-[#E4E4E4]">
                                            {actividades.map(actividad => (
                                                <div key={actividad.id} className="flex items-center gap-3 p-5">
                                                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#171717] text-xs font-bold text-white">
                                                        {iconoActividad(actividad.tipo)}
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-semibold">{actividad.descripcion}</p>
                                                        <p className="mt-1 text-xs text-[#6B7280]">{tiempoRelativo(actividad.fecha)}</p>
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
                        <div>
                            <h2 className="mb-6 text-3xl font-extrabold tracking-tight">Personal</h2>
                            <div className="mb-6 rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                <h3 className="mb-4 font-bold">Agregar personal</h3>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <input placeholder="Nombre" value={nuevoUsuario.nombre} onChange={e => setNuevoUsuario({...nuevoUsuario, nombre: e.target.value})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717]" />
                                    <select value={nuevoUsuario.rol} onChange={e => setNuevoUsuario({...nuevoUsuario, rol: e.target.value})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717]">
                                        <option value="mesero">Mesero</option>
                                        <option value="cocinero">Cocinero</option>
                                        <option value="cajero">Cajero</option>
                                        <option value="administrador">Administrador</option>
                                    </select>
                                    <input placeholder="Correo" value={nuevoUsuario.correo} onChange={e => setNuevoUsuario({...nuevoUsuario, correo: e.target.value})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717]" />
                                    <input placeholder="Contrasena" type="password" value={nuevoUsuario.contrasena} onChange={e => setNuevoUsuario({...nuevoUsuario, contrasena: e.target.value})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717]" />
                                    <button onClick={handleCrearUsuario} className="min-h-12 rounded-2xl bg-[#171717] text-sm font-semibold text-white hover:bg-black md:col-span-2">Agregar</button>
                                </div>
                            </div>
                            <div className="rounded-3xl border border-[#E4E4E4] bg-white">
                                {usuarios.map(u => (
                                    <div key={u.id_usuario} className="flex items-center justify-between border-b border-[#E4E4E4] px-5 py-4 last:border-0">
                                        <div>
                                            <p className="text-sm font-bold">{u.nombre}</p>
                                            <p className="text-xs text-[#6B7280]">{u.correo}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="rounded-full bg-[#F7F7F7] px-3 py-1 text-xs font-semibold">{u.rol}</span>
                                            <button onClick={() => handleEliminarUsuario(u.id_usuario)} className="text-xs font-semibold text-[#DC2626]">Eliminar</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {seccion === 'carta' && (
                        <div>
                            <h2 className="mb-6 text-3xl font-extrabold tracking-tight">Carta</h2>
                            <div className="mb-6 rounded-3xl border border-[#E4E4E4] bg-white p-5">
                                <h3 className="mb-4 font-bold">Agregar plato</h3>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <input placeholder="Nombre del plato" value={nuevoPlato.nombre} onChange={e => setNuevoPlato({...nuevoPlato, nombre: e.target.value})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717]" />
                                    <input placeholder="Precio" type="number" value={nuevoPlato.precio} onChange={e => setNuevoPlato({...nuevoPlato, precio: parseFloat(e.target.value)})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717]" />
                                    <input placeholder="Ingredientes" value={nuevoPlato.ingredientes} onChange={e => setNuevoPlato({...nuevoPlato, ingredientes: e.target.value})} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm outline-none focus:border-[#171717] md:col-span-2" />
                                    <button onClick={handleCrearPlato} className="min-h-12 rounded-2xl bg-[#171717] text-sm font-semibold text-white hover:bg-black md:col-span-2">Agregar plato</button>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#E4E4E4] bg-white">
                                {carta.map(plato => (
                                    <div key={plato.id_plato} className="flex items-center justify-between border-b border-[#E4E4E4] px-5 py-4 last:border-0">
                                        <p className="text-sm font-bold">{plato.nombre}</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-extrabold">S/ {plato.precio}</span>
                                            <button onClick={() => handleEliminarPlato(plato.id_plato)} className="text-xs font-semibold text-[#DC2626]">Eliminar</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {seccion === 'demo' && renderDemo()}
                </main>
            </div>
        </div>
    );
}
