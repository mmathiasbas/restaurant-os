import { useEffect, useState } from 'react';
import { getCarta } from '../services/cartaService';
import { agregarItemsOrden } from '../services/ordenService';

interface Plato {
    id_plato: number;
    nombre: string;
    precio: string;
}

interface OrdenItem {
    id: number;
    cantidad: number;
    precio_unitario: string;
    plato: { nombre: string };
}

interface ItemNuevo {
    id_plato: number;
    nombre: string;
    cantidad: number;
    precio_unitario: number;
}

interface Orden {
    id_orden: number;
    id_mesa: number;
    estado: string;
    precio_total: string;
    items: OrdenItem[];
    mesa?: { id_mesa: number };
}

interface Props {
    orden: Orden;
    onCerrar: () => void;
    onOrdenActualizada: () => void;
    onCancelarOrden?: () => void;
}

export default function VerOrdenMesa({ orden, onCerrar, onOrdenActualizada, onCancelarOrden }: Props) {
    const [carta, setCarta] = useState<Plato[]>([]);
    const [itemsNuevos, setItemsNuevos] = useState<ItemNuevo[]>([]);
    const [guardando, setGuardando] = useState(false);

    useEffect(() => {
        getCarta().then(setCarta);
    }, []);

    const agregarPlato = (plato: Plato) => {
        const existe = itemsNuevos.find(item => item.id_plato === plato.id_plato);

        if (existe) {
            setItemsNuevos(itemsNuevos.map(item =>
                item.id_plato === plato.id_plato
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
            return;
        }

        setItemsNuevos([...itemsNuevos, {
            id_plato: plato.id_plato,
            nombre: plato.nombre,
            cantidad: 1,
            precio_unitario: parseFloat(plato.precio)
        }]);
    };

    const quitarItemNuevo = (id_plato: number) => {
        setItemsNuevos(itemsNuevos.filter(item => item.id_plato !== id_plato));
    };

    const totalActual = parseFloat(orden.precio_total);
    const totalAgregado = itemsNuevos.reduce((total, item) => total + item.precio_unitario * item.cantidad, 0);

    const guardarItems = async () => {
        if (itemsNuevos.length === 0) return;

        setGuardando(true);
        try {
            await agregarItemsOrden(orden.id_orden, itemsNuevos);
            setItemsNuevos([]);
            onOrdenActualizada();
        } catch {
            alert('Error al agregar platos a la orden');
        } finally {
            setGuardando(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 sm:items-center">
            <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#E4E4E4] bg-white p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-[#0A0A0A]">Mesa {orden.id_mesa} - Orden activa</h2>
                        <p className="text-sm text-[#6B7280]">Estado: {orden.estado.replace('_', ' ')}</p>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                        {orden.estado === 'pendiente' && onCancelarOrden && (
                            <button onClick={onCancelarOrden} className="rounded-xl border border-[#DC2626]/20 bg-[#DC2626]/10 px-4 py-2 text-sm font-semibold text-[#DC2626] hover:bg-[#DC2626]/15">
                                Cancelar orden
                            </button>
                        )}
                        <button onClick={onCerrar} className="rounded-xl border border-[#E4E4E4] px-4 py-2 text-sm font-semibold hover:bg-[#F7F7F7]">
                            Cerrar
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                        <h3 className="mb-3 font-semibold text-[#0A0A0A]">Items actuales</h3>
                        <div className="flex flex-col gap-2">
                            {orden.items.map(item => (
                                <div key={item.id} className="rounded-xl border border-[#E4E4E4] px-4 py-3 text-sm">
                                    <div className="flex justify-between gap-3">
                                        <span className="font-medium text-[#0A0A0A]">{item.cantidad}x {item.plato.nombre}</span>
                                        <span className="text-[#6B7280]">S/ {(parseFloat(item.precio_unitario) * item.cantidad).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 flex justify-between border-t border-[#E4E4E4] pt-3 font-bold">
                            <span>Total actual</span>
                            <span>S/ {totalActual.toFixed(2)}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-[#0A0A0A]">Carta</h3>
                        <div className="flex flex-col gap-2">
                            {carta.map(plato => (
                                <button
                                    key={plato.id_plato}
                                    onClick={() => agregarPlato(plato)}
                                    className="flex min-h-12 items-center justify-between rounded-xl border border-[#E4E4E4] px-4 py-3 text-left text-sm hover:bg-[#F7F7F7]"
                                >
                                    <span className="font-medium">{plato.nombre}</span>
                                    <span className="font-semibold">S/ {plato.precio}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-[#0A0A0A]">Agregar a la orden</h3>
                        {itemsNuevos.length === 0 ? (
                            <p className="rounded-xl border border-dashed border-[#E4E4E4] p-4 text-sm text-[#6B7280]">Selecciona platos de la carta</p>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {itemsNuevos.map(item => (
                                    <div key={item.id_plato} className="flex items-center justify-between rounded-xl border border-[#E4E4E4] px-4 py-3 text-sm">
                                        <span className="font-medium">{item.nombre} x{item.cantidad}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6B7280]">S/ {(item.precio_unitario * item.cantidad).toFixed(2)}</span>
                                            <button onClick={() => quitarItemNuevo(item.id_plato)} className="rounded-lg px-2 py-1 text-[#DC2626] hover:bg-[#DC2626]/10">x</button>
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-2 flex justify-between border-t border-[#E4E4E4] pt-3 font-bold">
                                    <span>Nuevo total</span>
                                    <span>S/ {(totalActual + totalAgregado).toFixed(2)}</span>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={guardarItems}
                            disabled={itemsNuevos.length === 0 || guardando}
                            className="mt-5 min-h-12 w-full rounded-xl bg-[#171717] text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
                        >
                            {guardando ? 'Guardando...' : 'Agregar platos'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
