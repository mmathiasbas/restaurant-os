import { createContext } from 'react';

interface Usuario {
    id_usuario: number;
    nombre: string;
    rol: string;
}

interface AuthContextType {
    usuario: Usuario | null;
    token: string | null;
    login: (token: string, usuario: Usuario) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);