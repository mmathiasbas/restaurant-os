import { useAuth } from '../context/useAuth';

export default function Administrador() {
    const { usuario, logout } = useAuth();

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
    <p className="text-gray-500">Panel del administrador</p>
    </div>
    </div>
);
}