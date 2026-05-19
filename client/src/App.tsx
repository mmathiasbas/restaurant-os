import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Administrador from './pages/Administrador';
import Mesero from "./pages/Mesero.tsx";
import Cocinero from "./pages/Cocinero.tsx";
import Cajero from "./pages/Cajero.tsx";
import { useAuth } from './context/useAuth';

function App() {
    const { usuario } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/administrador" element={
                    usuario ? <Administrador /> : <Navigate to="/login" />
                } />
                <Route path="/mesero" element={
                    usuario ? <Mesero /> : <Navigate to="/login" />
                } />
                <Route path="/cocinero" element={
                    usuario ? <Cocinero /> : <Navigate to="/login" />
                } />
                <Route path="/cajero" element={
                    usuario ? <Cajero /> : <Navigate to="/login" />
                } />
                <Route path="/" element={
                    usuario ? <Navigate to={`/${usuario.rol}`} /> : <Navigate to="/login" />
                } />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;