import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

export const verificarJornadaAbierta = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jornada = await prisma.jornada.findFirst({
            where: { estado: 'abierto' }
        });

        if (!jornada) {
            return res.status(403).json({ error: 'El negocio esta cerrado. Abre una jornada para operar.' });
        }

        next();
    } catch (error) {
        return res.status(500).json({ error: 'Error al verificar la jornada' });
    }
};
