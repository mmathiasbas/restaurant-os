import { useState, useEffect } from 'react';
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Mesa {id_mesa} — Nueva orden</h2>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium text-gray-700 mb-3">Carta</h3>
                        <div className="flex flex-col gap-2">
                            {carta.map(plato => (
                                <button
                                    key={plato.id_plato}
                                    onClick={() => agregarPlato(plato)}
                                    className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50 text-sm"
                                >
                                    <span>{plato.nombre}</span>
                                    <span className="font-medium">S/ {plato.precio}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-700 mb-3">Orden</h3>
                        {items.length === 0 ? (
                            <p className="text-gray-400 text-sm">Agrega platos de la carta</p>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {items.map(item => (
                                    <div key={item.id_plato} className="flex justify-between items-center text-sm border rounded-lg px-3 py-2">
                                        <span>{item.nombre} x{item.cantidad}</span>
                                        <div className="flex items-center gap-2">
                                            <span>S/ {(item.precio_unitario * item.cantidad).toFixed(2)}</span>
                                            <button onClick={() => eliminarItem(item.id_plato)} className="text-red-400 hover:text-red-600">✕</button>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-between font-bold mt-2 pt-2 border-t">
                                    <span>Total</span>
                                    <span>S/ {total.toFixed(2)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <button onClick={onCancelar} className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50">
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={items.length === 0 || cargando}
                        className="flex-1 bg-gray-800 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-700 disabled:opacity-50"
                    >
                        {cargando ? 'Creando...' : 'Confirmar orden'}
                    </button>
                </div>
            </div>
        </div>
    );
}