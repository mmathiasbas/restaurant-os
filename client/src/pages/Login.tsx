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
            setError('Correo o contrasena incorrectos');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F7F7F7] p-4">
            <div className="w-full max-w-sm rounded-3xl border border-[#E4E4E4] bg-white p-6">
                <p className="text-sm font-medium text-[#6B7280]">Restaurant OS</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0A0A0A]">Iniciar sesion</h1>
                <p className="mt-2 text-sm text-[#6B7280]">Accede a tu panel operativo.</p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-semibold text-[#0A0A0A]">Correo</label>
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="mt-2 w-full rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm outline-none focus:border-[#171717]"
                            placeholder="correo@ejemplo.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-[#0A0A0A]">Contrasena</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            className="mt-2 w-full rounded-2xl border border-[#E4E4E4] bg-white px-4 py-3 text-sm outline-none focus:border-[#171717]"
                            placeholder="********"
                            required
                        />
                    </div>

                    {error && <p className="rounded-2xl bg-[#DC2626]/10 p-3 text-sm font-medium text-[#DC2626]">{error}</p>}

                    <button
                        type="submit"
                        disabled={cargando}
                        className="min-h-12 rounded-2xl bg-[#171717] text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
                    >
                        {cargando ? 'Cargando...' : 'Iniciar sesion'}
                    </button>
                </form>
            </div>
        </div>
    );
}
