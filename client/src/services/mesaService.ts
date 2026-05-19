import api from './api';

export const getMesas = async () => {
    const respuesta = await api.get('/mesas');
    return respuesta.data;
};

export const actualizarEstadoMesa = async (id_mesa: number, estado: string) => {
    const respuesta = await api.put(`/mesas/${id_mesa}`, { estado });
    return respuesta.data;
};