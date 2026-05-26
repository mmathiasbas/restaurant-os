import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { registrarActividad } from './actividadController';

export const getJornadaActual = async (req: Request, res: Response) => {
    try {
        const jornada = await prisma.jornada.findFirst({
            where: { estado: 'abierto' },
            orderBy: { fecha_apertura: 'desc' }
        });

        res.json(jornada);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la jornada' });
    }
};

export const abrirJornada = async (req: Request, res: Response) => {
    try {
        const jornadaAbierta = await prisma.jornada.findFirst({
            where: { estado: 'abierto' }
        });

        if (jornadaAbierta) {
            return res.status(409).json({ error: 'Ya hay una jornada abierta' });
        }

        const jornada = await prisma.jornada.create({
            data: { estado: 'abierto' }
        });

        await registrarActividad('jornada', 'Se abrio el negocio');

        res.status(201).json(jornada);
    } catch (error) {
        res.status(500).json({ error: 'Error al abrir el negocio' });
    }
};

export const cerrarJornada = async (req: Request, res: Response) => {
    try {
        const jornada = await prisma.jornada.findFirst({
            where: { estado: 'abierto' },
            orderBy: { fecha_apertura: 'desc' }
        });

        if (!jornada) {
            return res.status(409).json({ error: 'No hay una jornada abierta' });
        }

        const fechaCierre = new Date();
        const ventas = await prisma.venta.findMany({
            where: {
                fecha: {
                    gte: jornada.fecha_apertura,
                    lte: fechaCierre
                }
            }
        });

        const totalVendido = ventas.reduce((total: number, venta: any) => total + Number(venta.monto), 0);
        const ordenesCompletadas = ventas.length;

        const jornadaCerrada = await prisma.jornada.update({
            where: { id: jornada.id },
            data: {
                estado: 'cerrado',
                fecha_cierre: fechaCierre
            }
        });

        await registrarActividad('jornada', `Se cerro el negocio con S/ ${totalVendido.toFixed(2)} en ventas`);

        res.json({
            jornada: jornadaCerrada,
            resumen: {
                totalVendido,
                ordenesCompletadas
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al cerrar el negocio' });
    }
};
