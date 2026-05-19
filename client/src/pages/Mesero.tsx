import { useState, useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import { getMesas } from '../services/mesaService';
import TarjetaMesa from '../components/TarjetaMesa';
import FormularioOrden from '../components/FormularioOrden';

interface Mesa {
    id_mesa: number;
    estado: string;
}

export default function Mesero() {
    const { usuario, logout } = useAuth();
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [mesaSeleccionada, setMesaSeleccionada] = useState<Mesa | null>(null);

    useEffect(() => {
        getMesas().then(setMesas);
    }, []);

    const cargarMesas = () => {
        getMesas().then(setMesas);
    };

    const handleMesaClick = (mesa: Mesa) => {
        if (mesa.estado === 'vacia') {
            setMesaSeleccionada(mesa);
        }
    };

    const handleOrdenCreada = () => {
        setMesaSeleccionada(null);
        cargarMesas();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Bienvenido, {usuario?.nombre}
                    </h1>
                    <button
                        onClick={logout}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
                    >
                        Cerrar sesión
                    </button>
                </div>

                <h2 className="text-lg font-medium text-gray-700 mb-4">Mesas</h2>
                <div className="grid grid-cols-4 gap-4">
                    {mesas.map(mesa => (
                        <TarjetaMesa
                            key={mesa.id_mesa}
                            mesa={mesa}
                            onClick={handleMesaClick}
                        />
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
        </div>
    );
}