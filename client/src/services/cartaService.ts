import api from './api';

export const getCarta = async () => {
    const respuesta = await api.get('/carta');
    return respuesta.data;
};