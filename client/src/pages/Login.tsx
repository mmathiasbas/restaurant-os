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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F7F7F7] to-[#E4E4E4] p-4 font-['Geist']">
            <div className="w-full max-w-[400px] rounded-[32px] border border-[#E4E4E4] bg-white/80 p-10 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in zoom-in-95">
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#171717] text-white shadow-lg mb-6">
                        <span className="text-2xl font-black">R</span>
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6B7280]">Restaurant OS</p>
                    <h1 className="mt-2 text-4xl font-black tracking-tight text-[#0A0A0A]">Bienvenido</h1>
                    <p className="mt-3 text-sm font-medium text-[#6B7280]">Accede a tu panel operativo con seguridad.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-wider text-[#0A0A0A] ml-1">Correo Electrónico</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="w-full rounded-2xl border border-[#E4E4E4] bg-white px-5 py-4 text-sm font-medium transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]"
                                placeholder="tu@restaurante.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-wider text-[#0A0A0A] ml-1">Contraseña</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            className="w-full rounded-2xl border border-[#E4E4E4] bg-white px-5 py-4 text-sm font-medium transition-all duration-200 outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 rounded-2xl bg-[#DC2626]/5 p-4 text-xs font-bold text-[#DC2626] border border-red-100 animate-in slide-in-from-top-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={cargando}
                        className="group relative mt-2 flex min-h-[56px] items-center justify-center overflow-hidden rounded-2xl bg-[#171717] px-8 text-sm font-bold text-white transition-all duration-300 hover:bg-black hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] disabled:opacity-50"
                    >
                        {cargando ? (
                            <div className="flex items-center gap-2">
                                <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Verificando...</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <span>Iniciar sesión</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#A1A1AA]">
                        Desarrollado por Lincoln Softworks
                    </p>
                </div>
            </div>
        </div>
    );
}
