import { useState, useEffect } from 'react';
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

export default function Cocinero() {
    const { usuario, logout } = useAuth();
    const [ordenes, setOrdenes] = useState<Orden[]>([]);

    const cargarOrdenes = () => {
        getOrdenesPendientes().then(setOrdenes);
    };

    useEffect(() => {
        cargarOrdenes();
        const intervalo = setInterval(cargarOrdenes, 5000);
        return () => clearInterval(intervalo);
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
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-white">
                        Cocina — {usuario?.nombre}
                    </h1>
                    <button onClick={logout} className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600">
                        Cerrar sesión
                    </button>
                </div>

                {ordenes.length === 0 ? (
                    <p className="text-gray-400 text-center mt-16 text-lg">Sin órdenes pendientes</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {ordenes.map(orden => (
                            <div key={orden.id_orden} className={`rounded-xl p-5 ${orden.estado === 'pendiente' ? 'bg-yellow-900/40 border border-yellow-600' : 'bg-blue-900/40 border border-blue-600'}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-2xl font-black text-white">Mesa {orden.mesa.id_mesa}</span>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${orden.estado === 'pendiente' ? 'bg-yellow-600 text-white' : 'bg-blue-600 text-white'}`}>
                                        {orden.estado === 'pendiente' ? 'Pendiente' : 'En preparación'}
                                    </span>
                                </div>

                                <ul className="flex flex-col gap-2 mb-4">
                                    {orden.items.map(item => (
                                        <li key={item.id} className="text-white text-sm flex gap-2">
                                            <span className="font-bold">{item.cantidad}x</span>
                                            <span>{item.plato.nombre}</span>
                                        </li>
                                    ))}
                                </ul>

                                {orden.estado === 'pendiente' && (
                                    <button
                                        onClick={() => cambiarEstado(orden.id_orden, 'en_preparacion')}
                                        className="w-full bg-yellow-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-yellow-500"
                                    >
                                        Iniciar preparación
                                    </button>
                                )}
                                {orden.estado === 'en_preparacion' && (
                                    <button
                                        onClick={() => cambiarEstado(orden.id_orden, 'lista')}
                                        className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-500"
                                    >
                                        Orden lista
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}