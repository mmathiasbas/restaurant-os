import {Request, Response} from 'express';
import {prisma} from '../lib/prisma';

// getMesas -> Obtiene todas las mesas de la base de datos
// async -> Indica que la operación que se realizara puede ser tardada
// await -> Indica a la funcion que debe esperar la respuesta de la base de datos
export const getMesas = async (req: Request, res: Response) => {
    try {
        const mesas = await prisma.mesa.findMany();
        res.json(mesas);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener la mesa'});
    }
};

// crearMesa -> Crea una nueva mesa con el numero que se le mande
export const crearMesa = async (req: Request, res: Response) => {
    try {
        const {id_mesa} = req.body;
        const mesa = await prisma.mesa.create({
            data: {
                id_mesa
            }
        });
        res.status(201).json(mesa);
    } catch (error) {
        res.status(500).json({error: 'Error al crear la mesa'});
    }
};

export const actualizarMesa = async (req: Request, res: Response) => {
    try {
        const { id_mesa } = req.params;
        const { estado } = req.body;
        const mesa = await prisma.mesa.update({
            where: { id_mesa: parseInt(id_mesa as string) },
            data: { estado }
        });
        res.json(mesa);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la mesa' });
    }
};

export const eliminarMesa = async (req: Request, res: Response) => {
    try {
        const { id_mesa } = req.params;
        await prisma.mesa.delete({
            where: { id_mesa: parseInt(id_mesa as string) },
        });
        res.json({ mensaje: 'Mesa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la mesa' });
    }
};

//Códigos HTTP — el lenguaje que usan servidores y navegadores para comunicarse:
// Código   Significado
// 200      Todo bien
// 201      Creado exitosamente
// 400      Error del cliente (datos incorrectos)
// 401      No autenticado
// 403      Sin permiso
// 404      No encontrado
// 500      Error del servidor