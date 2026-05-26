import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { io } from '../app';

export const registrarActividad = async (tipo: string, descripcion: string) => {
    const actividad = await prisma.actividad.create({
        data: { tipo, descripcion }
    });

    // Emitir evento en tiempo real
    if (io) {
        io.emit('nueva_actividad', actividad);
    }

    return actividad;
};

export const getActividades = async (req: Request, res: Response) => {
    try {
        const actividades = await prisma.actividad.findMany({
            orderBy: { fecha: 'desc' },
            take: 10
        });

        res.json(actividades);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener actividades' });
    }
};
