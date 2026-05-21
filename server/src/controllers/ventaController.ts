import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getVentas = async (req: Request, res: Response) => {
    try {
        const ventas = await prisma.venta.findMany({
            orderBy: { fecha: 'desc' },
            include: {
                orden: {
                    include: {
                        mesa: true,
                        items: {
                            include: {
                                plato: true
                            }
                        }
                    }
                },
                cajero: { select: { id_usuario: true, nombre: true, rol: true } }
            }
        });

        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener ventas' });
    }
};
