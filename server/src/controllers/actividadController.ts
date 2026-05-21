import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const registrarActividad = async (tipo: string, descripcion: string) => {
    return prisma.actividad.create({
        data: { tipo, descripcion }
    });
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
