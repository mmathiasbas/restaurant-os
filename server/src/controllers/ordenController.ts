import {Request, Response} from 'express';
import {prisma} from '../lib/prisma'

export const getOrden = async (req: Request, res: Response) => {
    try {
        const ordenes = await prisma.orden.findMany({
            include: {
                items: true,
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });
        res.json(ordenes);
    } catch (err) {
        res.status(500).json({error:'Error al obtener la orden'})
    }
};

export const crearOrden = async (req: Request, res: Response) => {
    try {
        const { id_mesero, id_mesa, items } = req.body;

        const precio_total = items.reduce((total: number, item: any) => {
            return total + (item.precio_unitario * item.cantidad);
        }, 0);

        const orden = await prisma.orden.create({
            data: {
                precio_total,
                mesero: { connect: { id_usuario: id_mesero } },
                mesa: { connect: { id_mesa: id_mesa } },
                items: {
                    create: items.map((item: any) => ({
                        id_plato: item.id_plato,
                        cantidad: item.cantidad,
                        precio_unitario: item.precio_unitario
                    }))
                }
            },
            include: {
                items: true,
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });
        res.status(201).json(orden);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la orden' });
    }
};

export const actualizarOrden = async (req: Request, res: Response) => {
    try {
        const {id_orden} = req.params;
        const { estado } = req.body;

        const orden = await prisma.orden.update({
            where: { id_orden: parseInt(id_orden as string) },
            data: { estado },
            include: {
                items: true,
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });
        res.json(orden);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la orden' });
    }
}