import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { getOrdenesPendientes, actualizarEstadoOrden } from '../services/cocineroService';

interface OrdenItem {
    id: number;
    cantidad: number;
    precio_unitario: string;
    plato: { nombre: string };
}

interface Orden {
    id_orden: number;
    estado: string;
    fecha_hora: string;
    mesa: { id_mesa: number };
    items: OrdenItem[];
}

interface Props {
    modoDemo?: boolean;
}

const minutosTranscurridos = (fecha: string, ahora: number) => {
    return Math.max(0, Math.floor((ahora - new Date(fecha).getTime()) / 60000));
};

const formatoTimer = (fecha: string, ahora: number) => {
    const totalSegundos = Math.max(0, Math.floor((ahora - new Date(fecha).getTime()) / 1000));
    const minutos = Math.floor(totalSegundos / 60).toString().padStart(2, '0');
    const segundos = (totalSegundos % 60).toString().padStart(2, '0');
    return `${minutos}:${segundos}`;
};

export default function Cocinero({ modoDemo = false }: Props) {
    const { usuario, logout } = useAuth();
    const [ordenes, setOrdenes] = useState<Orden[]>([]);
    const [ahora, setAhora] = useState(Date.now());

    const cargarOrdenes = () => {
        getOrdenesPendientes().then(setOrdenes);
    };

    useEffect(() => {
        cargarOrdenes();
        const intervaloOrdenes = setInterval(cargarOrdenes, 5000);
        const intervaloReloj = setInterval(() => setAhora(Date.now()), 1000);

        return () => {
            clearInterval(intervaloOrdenes);
            clearInterval(intervaloReloj);
        };
    }, []);

    const cambiarEstado = async (id_orden: number, estado: string) => {
        try {
            await actualizarEstadoOrden(id_orden, estado);
            cargarOrdenes();
        } catch (error) {
            console.error('Error al actualizar:', error);
        }
    };

    return (
        <div className={`${modoDemo ? 'min-h-[720px]' : 'min-h-screen'} bg-[#0A0A0A] p-6 text-white`}>
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-white/50">KDS</p>
                        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Cocina</h1>
                        <p className="mt-1 text-sm text-white/50">{usuario?.nombre}</p>
                    </div>
                    {!modoDemo && (
                        <button onClick={logout} className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10">
                            Cerrar sesion
                        </button>
                    )}
                </header>

                {ordenes.length === 0 ? (
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
                        <p className="text-lg font-semibold text-white">Sin ordenes pendientes</p>
                        <p className="mt-2 text-sm text-white/50">Las nuevas comandas apareceran aqui automaticamente.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                        {ordenes.map(orden => {
                            const minutos = minutosTranscurridos(orden.fecha_hora, ahora);
                            const urgente = minutos >= 15;
                            const preparando = orden.estado === 'en_preparacion';

                            return (
                                <article
                                    key={orden.id_orden}
                                    className={`rounded-3xl border p-6 ${urgente ? 'border-[#DC2626] bg-[#DC2626]/10' : preparando ? 'border-[#2563EB] bg-[#2563EB]/10' : 'border-white/10 bg-white/[0.04]'}`}
                                >
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-white/50">Mesa</p>
                                            <h2 className="text-5xl font-extrabold tracking-tight">{orden.mesa.id_mesa}</h2>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-3xl font-extrabold tabular-nums ${urgente ? 'text-[#DC2626]' : 'text-white'}`}>
                                                {formatoTimer(orden.fecha_hora, ahora)}
                                            </p>
                                            <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${urgente ? 'bg-[#DC2626] text-white' : preparando ? 'bg-[#2563EB] text-white' : 'bg-[#D97706] text-white'}`}>
                                                {urgente ? 'Urgente' : preparando ? 'En preparacion' : 'Pendiente'}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="mb-6 flex flex-col gap-3">
                                        {orden.items.map(item => (
                                            <li key={item.id} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4">
                                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#0A0A0A]">
                                                    {item.cantidad}
                                                </span>
                                                <span className="text-lg font-semibold">{item.plato.nombre}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {orden.estado === 'pendiente' && (
                                        <button
                                            onClick={() => cambiarEstado(orden.id_orden, 'en_preparacion')}
                                            className="min-h-14 w-full rounded-2xl bg-white text-base font-bold text-[#0A0A0A] hover:bg-white/90"
                                        >
                                            Iniciar
                                        </button>
                                    )}
                                    {orden.estado === 'en_preparacion' && (
                                        <button
                                            onClick={() => cambiarEstado(orden.id_orden, 'lista')}
                                            className="min-h-14 w-full rounded-2xl bg-[#16A34A] text-base font-bold text-white hover:bg-[#15803D]"
                                        >
                                            Listo
                                        </button>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
