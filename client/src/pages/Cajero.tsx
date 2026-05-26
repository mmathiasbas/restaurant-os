import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { getMesas } from '../services/mesaService';
import { actualizarEstadoOrden, getOrdenes } from '../services/ordenService';
import { actualizarEstadoMesa } from '../services/mesaService';

interface Mesa {
    id_mesa: number;
    estado: string;
}

interface OrdenItem {
    id: number;
    cantidad: number;
    precio_unitario: string;
    plato: { nombre: string };
}

interface Orden {
    id_orden: number;
    id_mesa: number;
    estado: string;
    precio_total: string;
    fecha_hora: string;
    items: OrdenItem[];
    mesa: { id_mesa: number };
}

interface Ticket {
    orden: Orden;
    metodoPago: MetodoPago;
    hora: string;
}

interface Props {
    modoDemo?: boolean;
}

type MetodoPago = 'Efectivo' | 'Tarjeta' | 'Yape' | 'Plin';

const metodosPago: MetodoPago[] = ['Efectivo', 'Tarjeta', 'Yape', 'Plin'];

const estilosMetodoPago: Record<MetodoPago, string> = {
    Efectivo: 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20',
    Tarjeta: 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20',
    Yape: 'bg-purple-100 text-purple-700 border-purple-200',
    Plin: 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20',
};

const formatoHora = (fecha: string) => {
    return new Date(fecha).toLocaleTimeString('es-PE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

const esOrdenDeHoy = (fecha: string) => {
    const fechaOrden = new Date(fecha);
    const hoy = new Date();

    return fechaOrden.getFullYear() === hoy.getFullYear()
        && fechaOrden.getMonth() === hoy.getMonth()
        && fechaOrden.getDate() === hoy.getDate();
};

export default function Cajero({ modoDemo = false }: Props) {
    const { usuario, logout } = useAuth();
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [ordenes, setOrdenes] = useState<Orden[]>([]);
    const [ordenSeleccionada, setOrdenSeleccionada] = useState<Orden | null>(null);
    const [metodoPago, setMetodoPago] = useState<MetodoPago>('Efectivo');
    const [ticket, setTicket] = useState<Ticket | null>(null);
    const [horasCobro, setHorasCobro] = useState<Record<number, string>>({});
    const [metodosCobro, setMetodosCobro] = useState<Record<number, MetodoPago>>({});

    const cargarDatos = async () => {
        const [mesasData, ordenesData] = await Promise.all([getMesas(), getOrdenes()]);
        setMesas(mesasData.filter((m: Mesa) => m.estado === 'por_pagar'));
        setOrdenes(ordenesData);
    };

    useEffect(() => {
        const iniciar = async () => {
            await cargarDatos();
        };

        iniciar();

        const intervalo = setInterval(() => {
            cargarDatos();
        }, 3000);

        return () => clearInterval(intervalo);
    }, []);

    const verOrden = async (id_mesa: number) => {
        const ordenesData = await getOrdenes();
        const orden = ordenesData.find((o: Orden) =>
            o.id_mesa === id_mesa && o.estado === 'entregada'
        );
        if (orden) {
            setMetodoPago('Efectivo');
            setOrdenSeleccionada(orden);
        }
    };

    const procesarPago = async () => {
        if (!ordenSeleccionada) return;

        const ordenPagada = await actualizarEstadoOrden(ordenSeleccionada.id_orden, 'pagada', {
            metodo_pago: metodoPago
        });
        await actualizarEstadoMesa(ordenSeleccionada.id_mesa, 'vacia');

        const horaCobro = new Date().toISOString();
        const ticketOrden = { ...ordenSeleccionada, ...ordenPagada, estado: 'pagada' };

        setHorasCobro(prev => ({ ...prev, [ordenSeleccionada.id_orden]: horaCobro }));
        setMetodosCobro(prev => ({ ...prev, [ordenSeleccionada.id_orden]: metodoPago }));
        setTicket({ orden: ticketOrden, metodoPago, hora: horaCobro });
        setOrdenSeleccionada(null);
        await cargarDatos();
    };

    const historial = ordenes
        .filter(orden => orden.estado === 'pagada' && esOrdenDeHoy(orden.fecha_hora))
        .sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime());

    return (
        <div className={`${modoDemo ? 'min-h-[720px]' : 'min-h-screen'} bg-[#F7F7F7] p-6 text-[#0A0A0A]`}>
            <div className="mx-auto max-w-7xl">
                <header className="mb-6 flex items-center justify-between rounded-3xl border border-[#E4E4E4] bg-white p-5">
                    <div>
                        <p className="text-sm font-medium text-[#6B7280]">Caja</p>
                        <h1 className="mt-1 text-2xl font-extrabold">Cobros</h1>
                        <p className="mt-1 text-sm text-[#6B7280]">{usuario?.nombre}</p>
                    </div>
                    {!modoDemo && (
                        <button onClick={logout} className="rounded-2xl border border-[#E4E4E4] px-4 py-3 text-sm font-semibold hover:bg-[#F7F7F7]">
                            Cerrar sesion
                        </button>
                    )}
                </header>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
                    <aside className="rounded-3xl border border-[#E4E4E4] bg-white p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="font-bold">Mesas por cobrar</h2>
                            <span className="rounded-full bg-[#D97706]/10 px-3 py-1 text-xs font-semibold text-[#D97706]">{mesas.length}</span>
                        </div>

                        {mesas.length === 0 ? (
                            <p className="rounded-2xl border border-dashed border-[#E4E4E4] p-5 text-sm text-[#6B7280]">Sin mesas por cobrar</p>
                        ) : (
                            <div className="flex max-h-[360px] flex-col gap-2 overflow-y-auto pr-1">
                                {mesas.map(mesa => (
                                    <button
                                        key={mesa.id_mesa}
                                        onClick={() => verOrden(mesa.id_mesa)}
                                        className={`flex items-center justify-between rounded-2xl border p-4 text-left hover:bg-[#F7F7F7] ${ordenSeleccionada?.id_mesa === mesa.id_mesa ? 'border-[#171717]' : 'border-[#E4E4E4]'}`}
                                    >
                                        <div>
                                            <p className="text-sm text-[#6B7280]">Mesa</p>
                                            <p className="text-2xl font-extrabold">{mesa.id_mesa}</p>
                                        </div>
                                        <span className="rounded-full bg-[#D97706]/10 px-3 py-1 text-xs font-semibold text-[#D97706]">Por cobrar</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        <section className="mt-6 border-t border-[#E4E4E4] pt-4">
                            <h3 className="mb-3 text-sm font-bold">Historial de hoy</h3>
                            {historial.length === 0 ? (
                                <p className="text-sm text-[#6B7280]">Aun no hay ventas pagadas hoy</p>
                            ) : (
                                <div className="flex max-h-[420px] flex-col gap-3 overflow-y-auto pr-1">
                                    {historial.slice(0, 6).map(orden => {
                                        const metodo = metodosCobro[orden.id_orden] ?? 'Efectivo';
                                        const cantidadItems = orden.items.reduce((total, item) => total + item.cantidad, 0);

                                        return (
                                            <div key={orden.id_orden} className="rounded-2xl border border-[#E4E4E4] bg-white p-4">
                                                <div className="mb-3 flex items-center justify-between gap-3">
                                                    <span className="rounded-full bg-[#171717] px-3 py-1 text-xs font-bold text-white">
                                                        Mesa {orden.mesa.id_mesa}
                                                    </span>
                                                    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${estilosMetodoPago[metodo]}`}>
                                                        {metodo}
                                                    </span>
                                                </div>
                                                <div className="flex items-end justify-between gap-3">
                                                    <div>
                                                        <p className="text-xs font-medium text-[#6B7280]">Hora de cobro</p>
                                                        <p className="mt-1 text-sm font-semibold text-[#0A0A0A]">
                                                            {formatoHora(horasCobro[orden.id_orden] ?? orden.fecha_hora)}
                                                        </p>
                                                        <p className="mt-1 text-xs text-[#6B7280]">{cantidadItems} items</p>
                                                    </div>
                                                    <p className="text-xl font-extrabold text-[#16A34A]">
                                                        S/ {parseFloat(orden.precio_total).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </section>
                    </aside>

                    <section className="rounded-3xl border border-[#E4E4E4] bg-white p-6">
                        {!ordenSeleccionada ? (
                            <div className="flex min-h-[520px] items-center justify-center rounded-3xl border border-dashed border-[#E4E4E4] text-center">
                                <div>
                                    <p className="text-lg font-bold">Selecciona una mesa</p>
                                    <p className="mt-2 text-sm text-[#6B7280]">El detalle del cobro aparecera aqui.</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-8 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-[#6B7280]">Detalle del cobro</p>
                                        <h2 className="mt-1 text-4xl font-extrabold">Mesa {ordenSeleccionada.mesa.id_mesa}</h2>
                                    </div>
                                    <span className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white">
                                        {metodoPago}
                                    </span>
                                </div>

                                <div className="mb-8 divide-y divide-[#E4E4E4] rounded-2xl border border-[#E4E4E4]">
                                    {ordenSeleccionada.items.map(item => (
                                        <div key={item.id} className="flex justify-between gap-4 p-4">
                                            <span className="font-medium">{item.cantidad}x {item.plato.nombre}</span>
                                            <span className="font-semibold">S/ {(parseFloat(item.precio_unitario) * item.cantidad).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-8 rounded-3xl bg-[#171717] p-6 text-white">
                                    <p className="text-sm text-white/60">Total a cobrar</p>
                                    <p className="mt-2 text-5xl font-extrabold tracking-tight">S/ {parseFloat(ordenSeleccionada.precio_total).toFixed(2)}</p>
                                </div>

                                <div className="mb-8">
                                    <p className="mb-3 text-sm font-bold">Metodo de pago</p>
                                    <div className="grid grid-cols-4 gap-2">
                                        {metodosPago.map(metodo => (
                                            <button
                                                key={metodo}
                                                onClick={() => setMetodoPago(metodo)}
                                                className={`min-h-12 rounded-2xl border px-3 text-sm font-semibold ${metodoPago === metodo ? 'border-[#171717] bg-[#171717] text-white' : 'border-[#E4E4E4] bg-white text-[#0A0A0A] hover:bg-[#F7F7F7]'}`}
                                            >
                                                {metodo}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button onClick={() => setOrdenSeleccionada(null)} className="min-h-14 flex-1 rounded-2xl border border-[#E4E4E4] font-semibold hover:bg-[#F7F7F7]">
                                        Cancelar
                                    </button>
                                    <button onClick={procesarPago} className="min-h-14 flex-1 rounded-2xl bg-[#171717] font-semibold text-white hover:bg-black">
                                        Cobrar
                                    </button>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>

            {ticket && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-sm rounded-3xl border border-[#E4E4E4] bg-white p-6">
                        <h2 className="text-xl font-bold">Ticket de venta</h2>
                        <p className="mt-1 text-sm text-[#6B7280]">Mesa {ticket.orden.mesa.id_mesa} - {formatoHora(ticket.hora)}</p>

                        <div className="my-5 flex flex-col gap-2">
                            {ticket.orden.items.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span>{item.cantidad}x {item.plato.nombre}</span>
                                    <span>S/ {(parseFloat(item.precio_unitario) * item.cantidad).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-[#E4E4E4] pt-4">
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="text-[#6B7280]">Metodo</span>
                                <span className="font-semibold">{ticket.metodoPago}</span>
                            </div>
                            <div className="flex justify-between text-lg font-extrabold">
                                <span>Total</span>
                                <span>S/ {parseFloat(ticket.orden.precio_total).toFixed(2)}</span>
                            </div>
                        </div>

                        <button onClick={() => setTicket(null)} className="mt-6 min-h-12 w-full rounded-2xl bg-[#171717] text-sm font-semibold text-white hover:bg-black">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
