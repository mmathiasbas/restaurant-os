import { useState } from 'react';
import { AuthContext } from './AuthContext';

interface Usuario {
    id_usuario: number;
    nombre: string;
    rol: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [usuario, setUsuario] = useState<Usuario | null>(() => {
        const guardado = localStorage.getItem('usuario');
        return guardado ? JSON.parse(guardado) : null;
    });

    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem('token');
    });

    const login = (token: string, usuario: Usuario) => {
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        setToken(token);
        setUsuario(usuario);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        setToken(null);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ usuario, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};