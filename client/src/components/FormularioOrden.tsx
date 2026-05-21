import { useEffect, useState } from 'react';
import { getCarta } from '../services/cartaService';
import { crearOrden } from '../services/ordenService';
import { useAuth } from '../context/useAuth';

interface Plato {
    id_plato: number;
    nombre: string;
    precio: string;
}

interface Item {
    id_plato: number;
    nombre: string;
    cantidad: number;
    precio_unitario: number;
}

interface Props {
    id_mesa: number;
    onOrdenCreada: () => void;
    onCancelar: () => void;
}

export default function FormularioOrden({ id_mesa, onOrdenCreada, onCancelar }: Props) {
    const { usuario } = useAuth();
    const [carta, setCarta] = useState<Plato[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        getCarta().then(setCarta);
    }, []);

    const agregarPlato = (plato: Plato) => {
        const existe = items.find(i => i.id_plato === plato.id_plato);
        if (existe) {
            setItems(items.map(i =>
                i.id_plato === plato.id_plato
                    ? { ...i, cantidad: i.cantidad + 1 }
                    : i
            ));
        } else {
            setItems([...items, {
                id_plato: plato.id_plato,
                nombre: plato.nombre,
                cantidad: 1,
                precio_unitario: parseFloat(plato.precio)
            }]);
        }
    };

    const eliminarItem = (id_plato: number) => {
        setItems(items.filter(i => i.id_plato !== id_plato));
    };

    const total = items.reduce((acc, i) => acc + i.precio_unitario * i.cantidad, 0);

    const handleSubmit = async () => {
        if (items.length === 0) return;
        setCargando(true);
        try {
            await crearOrden(usuario!.id_usuario, id_mesa, items);
            onOrdenCreada();
        } catch {
            alert('Error al crear la orden');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 sm:items-center">
            <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#E4E4E4] bg-white p-5 sm:p-6">
                <h2 className="text-xl font-bold text-[#0A0A0A]">Mesa {id_mesa} - Nueva orden</h2>
                <p className="mt-1 text-sm text-[#6B7280]">Selecciona platos y confirma el pedido.</p>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="mb-3 font-semibold text-[#0A0A0A]">Carta</h3>
                        <div className="flex flex-col gap-2">
                            {carta.map(plato => (
                                <button
                                    key={plato.id_plato}
                                    onClick={() => agregarPlato(plato)}
                                    className="flex min-h-12 items-center justify-between rounded-xl border border-[#E4E4E4] bg-white px-4 py-3 text-left text-sm hover:bg-[#F7F7F7]"
                                >
                                    <span className="font-medium text-[#0A0A0A]">{plato.nombre}</span>
                                    <span className="font-semibold text-[#171717]">S/ {plato.precio}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-[#0A0A0A]">Orden</h3>
                        {items.length === 0 ? (
                            <p className="rounded-xl border border-dashed border-[#E4E4E4] p-4 text-sm text-[#6B7280]">Agrega platos de la carta</p>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {items.map(item => (
                                    <div key={item.id_plato} className="flex items-center justify-between rounded-xl border border-[#E4E4E4] px-4 py-3 text-sm">
                                        <span className="font-medium text-[#0A0A0A]">{item.nombre} x{item.cantidad}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#6B7280]">S/ {(item.precio_unitario * item.cantidad).toFixed(2)}</span>
                                            <button onClick={() => eliminarItem(item.id_plato)} className="rounded-lg px-2 py-1 text-[#DC2626] hover:bg-[#DC2626]/10">x</button>
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-2 flex justify-between border-t border-[#E4E4E4] pt-3 font-bold text-[#0A0A0A]">
                                    <span>Total</span>
                                    <span>S/ {total.toFixed(2)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button onClick={onCancelar} className="min-h-12 flex-1 rounded-xl border border-[#E4E4E4] text-sm font-semibold hover:bg-[#F7F7F7]">
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={items.length === 0 || cargando}
                        className="min-h-12 flex-1 rounded-xl bg-[#171717] text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
                    >
                        {cargando ? 'Creando...' : 'Confirmar orden'}
                    </button>
                </div>
            </div>
        </div>
    );
}
