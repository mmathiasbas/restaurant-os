import api from './api';

interface Orden {
    id_orden: number;
    estado: string;
}

export const getOrdenesPendientes = async () => {
    const respuesta = await api.get('/ordenes');
    return respuesta.data.filter((o: Orden) =>
        o.estado === 'pendiente' || o.estado === 'en_preparacion'
    );
};

export const actualizarEstadoOrden = async (id_orden: number, estado: string) => {
    const respuesta = await api.put(`/ordenes/${id_orden}`, { estado });
    return respuesta.data;
};