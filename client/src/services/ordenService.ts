import api from './api';

export const crearOrden = async (id_mesero: number, id_mesa: number, items: any[]) => {
    const respuesta = await api.post('/ordenes', { id_mesero, id_mesa, items });
    return respuesta.data;
};

export const agregarItemsOrden = async (id_orden: number, items: any[]) => {
    const respuesta = await api.post(`/ordenes/${id_orden}/items`, { items });
    return respuesta.data;
};

export const getOrdenes = async () => {
    const respuesta = await api.get('/ordenes');
    return respuesta.data;
};

export const actualizarEstadoOrden = async (id_orden: number, estado: string, datosExtra: Record<string, unknown> = {}) => {
    const respuesta = await api.put(`/ordenes/${id_orden}`, { estado, ...datosExtra });
    return respuesta.data;
};
