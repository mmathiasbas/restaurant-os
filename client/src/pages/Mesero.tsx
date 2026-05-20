import { useState, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { getMesas } from '../services/mesaService';
import { actualizarEstadoOrden, getOrdenes } from '../services/ordenService';
import TarjetaMesa from '../components/TarjetaMesa';
import FormularioOrden from '../components/FormularioOrden';

interface Mesa {
    id_mesa: number;
    estado: string;
}

interface Orden {
    id_orden: number;
    id_mesa: number;
    estado: string;
}

export default function Mesero() {
    const { usuario, logout } = useAuth();
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [mesaSeleccionada, setMesaSeleccionada] = useState<Mesa | null>(null);
    const [mesaParaEntregar, setMesaParaEntregar] = useState<Mesa | null>(null);

    useEffect(() => {
        getMesas().then(setMesas);
    }, []);

    const cargarMesas = () => {
        getMesas().then(setMesas);
    };

    const handleMesaClick = (mesa: Mesa) => {
        if (mesa.estado === 'vacia') {
            setMesaSeleccionada(mesa);
        } else if (mesa.estado === 'lista') {
            setMesaParaEntregar(mesa);
        }
    };

    const handleOrdenCreada = () => {
        setMesaSeleccionada(null);
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
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Bienvenido, {usuario?.nombre}
                    </h1>
                    <button onClick={logout} className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
                        Cerrar sesión
                    </button>
                </div>

                <h2 className="text-lg font-medium text-gray-700 mb-4">Mesas</h2>
                <div className="grid grid-cols-4 gap-4">
                    {mesas.map(mesa => (
                        <TarjetaMesa key={mesa.id_mesa} mesa={mesa} onClick={handleMesaClick} />
                    ))}
                </div>

                {mesas.length === 0 && (
                    <p className="text-gray-400 text-center mt-8">No hay mesas registradas</p>
                )}
            </div>

            {mesaSeleccionada && (
                <FormularioOrden
                    id_mesa={mesaSeleccionada.id_mesa}
                    onOrdenCreada={handleOrdenCreada}
                    onCancelar={() => setMesaSeleccionada(null)}
                />
            )}

            {mesaParaEntregar && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-sm">
                        <h2 className="text-xl font-bold mb-2">Mesa {mesaParaEntregar.id_mesa}</h2>
                        <p className="text-gray-600 mb-6">¿Confirmas que entregaste la orden al cliente?</p>
                        <div className="flex gap-3">
                            <button onClick={() => setMesaParaEntregar(null)} className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50">
                                Cancelar
                            </button>
                            <button onClick={handleEntregar} className="flex-1 bg-gray-800 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-700">
                                Confirmar entrega
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}