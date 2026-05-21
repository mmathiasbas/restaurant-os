import api from './api';

export const getUsuarios = async () => {
    const respuesta = await api.get('/usuarios');
    return respuesta.data;
};

export const crearUsuario = async (datos: {
    nombre: string;
    rol: string;
    correo: string;
    contrasena: string;
}) => {
    const respuesta = await api.post('/usuarios', datos);
    return respuesta.data;
};

export const eliminarUsuario = async (id: number) => {
    const respuesta = await api.delete(`/usuarios/${id}`);
    return respuesta.data;
};

export const getCartas = async () => {
    const respuesta = await api.get('/carta');
    return respuesta.data;
};

export const crearPlato = async (datos: {
    nombre: string;
    ingredientes: string;
    precio: number;
}) => {
    const respuesta = await api.post('/carta', datos);
    return respuesta.data;
};

export const eliminarPlato = async (id: number) => {
    const respuesta = await api.delete(`/carta/${id}`);
    return respuesta.data;
};

export const resetDemo = async () => {
    const respuesta = await api.post('/admin/reset-demo');
    return respuesta.data;
};

export const getJornadaActual = async () => {
    const respuesta = await api.get('/jornadas/actual');
    return respuesta.data;
};

export const abrirNegocio = async () => {
    const respuesta = await api.post('/jornadas/abrir');
    return respuesta.data;
};

export const cerrarNegocio = async () => {
    const respuesta = await api.post('/jornadas/cerrar');
    return respuesta.data;
};

export const getVentas = async () => {
    const respuesta = await api.get('/ventas');
    return respuesta.data;
};

export const getActividades = async () => {
    const respuesta = await api.get('/actividades');
    return respuesta.data;
};
