import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { io } from '../app';
import { registrarActividad } from './actividadController';

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
                items: {
                    include: {
                        plato: true
                    }
                },
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });

        // Actualizar estado de la mesa a ocupada
        await prisma.mesa.update({
            where: { id_mesa: id_mesa },
            data: { estado: 'ocupada' }
        });

        // Notifica a la cocina que llego una nueva orden
        io.to('cocina').emit('nueva_orden', orden);
        await registrarActividad('orden', `Nueva orden creada para la mesa ${orden.id_mesa}`);

        res.status(201).json(orden);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la orden' });
    }
};

export const actualizarOrden = async (req: Request, res: Response) => {
    try {
        const { id_orden } = req.params;
        const { estado, metodo_pago } = req.body;

        const orden = await prisma.orden.update({
            where: { id_orden: parseInt(id_orden as string) },
            data: { estado },
            include: {
                items: {
                    include: {
                        plato: true
                    }
                },
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });

        // Notifica segun el nuevo estado
        if (estado === 'lista') {
            await prisma.mesa.update({
                where: { id_mesa: orden.id_mesa },
                data: { estado: 'lista' }
            });
            await registrarActividad('cocina', `La orden de la mesa ${orden.id_mesa} esta lista`);
        }

        if (estado === 'cancelada') {
            await registrarActividad('orden', `Pedido cancelado en la mesa ${orden.id_mesa}`);
        }

        if (estado === 'entregada') {
            await prisma.mesa.update({
                where: { id_mesa: orden.id_mesa },
                data: { estado: 'por_pagar' }
            });
        }

        if (estado === 'pagada') {
            const usuario = (req as any).usuario;
            await prisma.venta.upsert({
                where: { id_orden: orden.id_orden },
                update: {
                    monto: orden.precio_total,
                    metodo_pago: metodo_pago ?? 'No especificado',
                    id_cajero: usuario.id_usuario
                },
                create: {
                    id_orden: orden.id_orden,
                    id_cajero: usuario.id_usuario,
                    monto: orden.precio_total,
                    metodo_pago: metodo_pago ?? 'No especificado'
                }
            });
            await registrarActividad('venta', `Se cobro la mesa ${orden.id_mesa} por S/ ${Number(orden.precio_total).toFixed(2)}`);
            io.to('cajero').emit('orden_pagada', orden);
        }

        res.json(orden);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la orden' });
    }
};

export const agregarItemsOrden = async (req: Request, res: Response) => {
    try {
        const { id_orden } = req.params;
        const { items } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Debes enviar al menos un item' });
        }

        const subtotal = items.reduce((total: number, item: any) => {
            return total + (Number(item.precio_unitario) * Number(item.cantidad));
        }, 0);

        const ordenActual = await prisma.orden.findUnique({
            where: { id_orden: parseInt(id_orden as string) },
            select: { precio_total: true }
        });

        if (!ordenActual) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }

        const orden = await prisma.orden.update({
            where: { id_orden: parseInt(id_orden as string) },
            data: {
                precio_total: Number(ordenActual.precio_total) + subtotal,
                items: {
                    create: items.map((item: any) => ({
                        id_plato: item.id_plato,
                        cantidad: item.cantidad,
                        precio_unitario: item.precio_unitario
                    }))
                }
            },
            include: {
                items: {
                    include: {
                        plato: true
                    }
                },
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });

        io.to('cocina').emit('orden_actualizada', orden);

        res.json(orden);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar items a la orden' });
    }
};

export const getOrden = async (req: Request, res: Response) => {
    try {
        const ordenes = await prisma.orden.findMany({
            include: {
                items: {
                    include: {
                        plato: true
                    }
                },
                mesero: { select: { nombre: true, rol: true } },
                mesa: true
            }
        });
        res.json(ordenes);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la orden' });
    }
};
