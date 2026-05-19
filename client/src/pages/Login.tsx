import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCargando(true);
        setError('');

        try {
            const respuesta = await api.post('/auth/login', { correo, contrasena });
            login(respuesta.data.token, respuesta.data.usuario);
            navigate(`/${respuesta.data.usuario.rol}`);
        } catch {
            setError('Correo o contraseña incorrectos');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Restaurant OS</h1>
                <p className="text-gray-500 text-sm mb-6">Inicia sesión para continuar</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Correo</label>
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            placeholder="correo@ejemplo.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        disabled={cargando}
                        className="bg-gray-800 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-700 disabled:opacity-50"
                    >
                        {cargando ? 'Cargando...' : 'Iniciar sesión'}
                    </button>
                </form>
            </div>
        </div>
    );
}