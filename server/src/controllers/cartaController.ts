import {Request, Response} from 'express';
import {prisma} from "../lib/prisma";

export const getCartas = async (req: Request, res: Response) => {
    try {
        const cartas = await prisma.carta.findMany();
        res.json(cartas);
    } catch (error){
        res.status(500).send({error: 'Error al obtener la carta'})
    }
};

export const crearPlato = async (req: Request, res: Response) => {
    try {
        const {nombre, ingredientes, precio} = req.body;

        const carta = await prisma.carta.create({
            data: {nombre, ingredientes, precio},
        });
        res.status(201).json(carta);
    } catch (error){
        res.status(500).send({error: 'Error al crear el plato'})
    }
}

export const actualizarPlato = async (req: Request, res: Response) => {
    try {
        const {id_plato} = req.params;
        const {nombre, ingredientes, precio} = req.body;

        const carta = await prisma.carta.update({
            where: { id_plato: parseInt(id_plato as string) },
            data: {nombre, ingredientes, precio},
        });
        res.json(carta);
    } catch (error){
        res.status(500).send({error: 'Error al actualizar el plato'})
    }
}

export const eliminarPlato = async (req: Request, res: Response) => {
    try {
        const {id_plato} = req.params;
        await prisma.carta.delete({
            where: { id_plato: parseInt(id_plato as string) },
        });
        res.json({mensaje: 'Plato eliminado correctamente'});
    } catch (error){
        res.status(500).send({error: 'Error al eliminar el plato'})
    }
}