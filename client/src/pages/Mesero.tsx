import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { getMesas } from '../services/mesaService';
import { actualizarEstadoMesa } from '../services/mesaService';
import { actualizarEstadoOrden, getOrdenes } from '../services/ordenService';
import TarjetaMesa from '../components/TarjetaMesa';
import FormularioOrden from '../components/FormularioOrden';
import VerOrdenMesa from '../components/VerOrdenMesa';

interface Mesa {
    id_mesa: number;
    estado: string;
}

interface Orden {
    id_orden: number;
    id_mesa: number;
    estado: string;
    precio_total: string;
    items: {
        id: number;
        cantidad: number;
        precio_unitario: string;
        plato: { nombre: string };
    }[];
    mesa?: { id_mesa: number };
}

interface Props {
    modoDemo?: boolean;
}

export default function Mesero({ modoDemo = false }: Props) {
    const { usuario, logout } = useAuth();
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [mesaSeleccionada, setMesaSeleccionada] = useState<Mesa | null>(null);
    const [mesaParaEntregar, setMesaParaEntregar] = useState<Mesa | null>(null);
    const [ordenActiva, setOrdenActiva] = useState<Orden | null>(null);

    const cargarMesas = () => {
        getMesas().then(setMesas);
    };

    useEffect(() => {
        cargarMesas();
    }, []);

    const buscarOrdenActiva = async (id_mesa: number) => {
        const ordenes = await getOrdenes();
        const orden = ordenes.find((o: Orden) =>
            o.id_mesa === id_mesa && (o.estado === 'pendiente' || o.estado === 'en_preparacion')
        );
        if (orden) setOrdenActiva(orden);
    };

    const handleMesaClick = async (mesa: Mesa) => {
        if (mesa.estado === 'vacia') {
            setMesaSeleccionada(mesa);
        } else if (mesa.estado === 'lista') {
            setMesaParaEntregar(mesa);
        } else if (mesa.estado === 'ocupada') {
            await buscarOrdenActiva(mesa.id_mesa);
        }
    };

    const handleOrdenCreada = () => {
        setMesaSeleccionada(null);
        cargarMesas();
    };

    const handleOrdenActualizada = async () => {
        if (!ordenActiva) return;
        await buscarOrdenActiva(ordenActiva.id_mesa);
        cargarMesas();
    };

    const handleCancelarOrden = async () => {
        if (!ordenActiva || ordenActiva.estado !== 'pendiente') return;

        await actualizarEstadoOrden(ordenActiva.id_orden, 'cancelada');
        await actualizarEstadoMesa(ordenActiva.id_mesa, 'vacia');
        setOrdenActiva(null);
        cargarMesas();
    };

    const handleEntregar = async () => {
        if (!mesaParaEntregar) return;
        const ordenes = await getOrdenes();
        const orden = ordenes.find((o: Orden) =>
            o.id_mesa === mesaParaEntregar.id_mesa && o.estado === 'lista'
        );
        if (orden) {
            await actualizarEstadoOrden(orden.id_orden, 'entregada');
            setMesaParaEntregar(null);
            cargarMesas();
        }
    };

    return (
        <div className={`${modoDemo ? 'min-h-[720px]' : 'min-h-screen'} bg-[#F7F7F7] pb-24 text-[#0A0A0A]`}>
            <main className="mx-auto w-full max-w-md px-4 py-5">
                <header className="mb-5 rounded-3xl border border-[#E4E4E4] bg-white p-5">
                    <p className="text-sm font-medium text-[#6B7280]">Mesero</p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-extrabold tracking-tight">Mesas</h1>
                            <p className="mt-1 text-sm text-[#6B7280]">{usuario?.nombre}</p>
                        </div>
                        <button
                            onClick={cargarMesas}
                            className="min-h-11 rounded-2xl border border-[#E4E4E4] px-4 text-sm font-semibold hover:bg-[#F7F7F7]"
                        >
                            Sincronizar
                        </button>
                    </div>
                </header>

                <section className="grid grid-cols-2 gap-3 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {mesas.map(mesa => (
                        <TarjetaMesa key={mesa.id_mesa} mesa={mesa} onClick={handleMesaClick} />
                    ))}
                </section>

                {mesas.length === 0 && (
                    <p className="mt-8 rounded-2xl border border-dashed border-[#E4E4E4] bg-white p-6 text-center text-sm text-[#6B7280]">
                        No hay mesas registradas
                    </p>
                )}
            </main>

            <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E4E4E4] bg-white/95 px-4 py-3 backdrop-blur">
                <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
                    <button className="min-h-12 rounded-2xl bg-[#171717] text-sm font-semibold text-white">Mesas</button>
                    <button onClick={cargarMesas} className="min-h-12 rounded-2xl border border-[#E4E4E4] text-sm font-semibold text-[#0A0A0A]">Actualizar</button>
                    {!modoDemo ? (
                        <button onClick={logout} className="min-h-12 rounded-2xl border border-[#E4E4E4] text-sm font-semibold text-[#0A0A0A]">Salir</button>
                    ) : (
                        <button className="min-h-12 rounded-2xl border border-[#E4E4E4] text-sm font-semibold text-[#6B7280]">Demo</button>
                    )}
                </div>
            </nav>

            {mesaSeleccionada && (
                <FormularioOrden
                    id_mesa={mesaSeleccionada.id_mesa}
                    onOrdenCreada={handleOrdenCreada}
                    onCancelar={() => setMesaSeleccionada(null)}
                />
            )}

            {ordenActiva && (
                <VerOrdenMesa
                    orden={ordenActiva}
                    onCerrar={() => setOrdenActiva(null)}
                    onOrdenActualizada={handleOrdenActualizada}
                    onCancelarOrden={handleCancelarOrden}
                />
            )}

            {mesaParaEntregar && (
                <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 sm:items-center">
                    <div className="w-full max-w-sm rounded-3xl border border-[#E4E4E4] bg-white p-6">
                        <h2 className="text-xl font-bold">Mesa {mesaParaEntregar.id_mesa}</h2>
                        <p className="mt-2 text-sm text-[#6B7280]">Confirma que entregaste la orden al cliente.</p>
                        <div className="mt-6 flex gap-3">
                            <button onClick={() => setMesaParaEntregar(null)} className="min-h-12 flex-1 rounded-xl border border-[#E4E4E4] text-sm font-semibold hover:bg-[#F7F7F7]">
                                Cancelar
                            </button>
                            <button onClick={handleEntregar} className="min-h-12 flex-1 rounded-xl bg-[#171717] text-sm font-semibold text-white hover:bg-black">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
