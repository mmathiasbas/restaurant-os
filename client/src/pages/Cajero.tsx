import { useState, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { getMesas } from '../services/mesaService';
import { getOrdenes, actualizarEstadoOrden } from '../services/ordenService';
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
    items: OrdenItem[];
    mesa: { id_mesa: number };
}

export default function Cajero() {
    const { usuario, logout } = useAuth();
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [ordenSeleccionada, setOrdenSeleccionada] = useState<Orden | null>(null);

    const cargarMesas = () => {
        getMesas().then(data =>
            setMesas(data.filter((m: Mesa) => m.estado === 'por_pagar'))
        );
    };

    useEffect(() => {
        cargarMesas();
        const intervalo = setInterval(cargarMesas, 3000);
        return () => clearInterval(intervalo);
    }, []);

    const verOrden = async (id_mesa: number) => {
        const ordenes = await getOrdenes();
        const orden = ordenes.find((o: Orden) =>
            o.id_mesa === id_mesa && o.estado === 'entregada'
        );
        if (orden) setOrdenSeleccionada(orden);
    };

    const procesarPago = async () => {
        if (!ordenSeleccionada) return;
        await actualizarEstadoOrden(ordenSeleccionada.id_orden, 'pagada');
        await actualizarEstadoMesa(ordenSeleccionada.id_mesa, 'vacia');
        setOrdenSeleccionada(null);
        cargarMesas();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Caja — {usuario?.nombre}
                    </h1>
                    <button onClick={logout} className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
                        Cerrar sesión
                    </button>
                </div>

                <h2 className="text-lg font-medium text-gray-700 mb-4">Mesas por cobrar</h2>

                {mesas.length === 0 ? (
                    <p className="text-gray-400 text-center mt-16">Sin mesas por cobrar</p>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {mesas.map(mesa => (
                            <button
                                key={mesa.id_mesa}
                                onClick={() => verOrden(mesa.id_mesa)}
                                className="bg-yellow-100 border-2 border-yellow-300 rounded-xl p-6 flex flex-col items-center gap-2 hover:bg-yellow-200"
                            >
                                <span className="text-3xl font-black text-gray-800">{mesa.id_mesa}</span>
                                <span className="text-xs font-medium text-gray-600">Por cobrar</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {ordenSeleccionada && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-sm">
                        <h2 className="text-xl font-bold mb-4">Mesa {ordenSeleccionada.mesa.id_mesa} — Cobro</h2>
                        <div className="flex flex-col gap-2 mb-4">
                            {ordenSeleccionada.items.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span>{item.cantidad}x {item.plato.nombre}</span>
                                    <span>S/ {(parseFloat(item.precio_unitario) * item.cantidad).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-3 mb-6">
                            <span>Total</span>
                            <span>S/ {parseFloat(ordenSeleccionada.precio_total).toFixed(2)}</span>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setOrdenSeleccionada(null)} className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50">
                                Cancelar
                            </button>
                            <button onClick={procesarPago} className="flex-1 bg-gray-800 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-700">
                                Cobrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}