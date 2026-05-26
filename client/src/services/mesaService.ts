import api from './api';

export const getMesas = async () => {
    const respuesta = await api.get('/mesas');
    return respuesta.data;
};

export const actualizarEstadoMesa = async (id_mesa: number, estado: string) => {
    const respuesta = await api.put(`/mesas/${id_mesa}`, { estado });
    return respuesta.data;
};

export const crearMesa = async (id_mesa: number) => {
    const res = await api.post('/mesas', { id_mesa });
    return res.data;
};

export const eliminarMesa = async (id_mesa: number) => {
    const res = await api.delete(`/mesas/${id_mesa}`);
    return res.data;
};