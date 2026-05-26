"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cerrarJornada = exports.abrirJornada = exports.getJornadaActual = void 0;
const prisma_1 = require("../lib/prisma");
const actividadController_1 = require("./actividadController");
const getJornadaActual = async (req, res) => {
    try {
        const jornada = await prisma_1.prisma.jornada.findFirst({
            where: { estado: 'abierto' },
            orderBy: { fecha_apertura: 'desc' }
        });
        res.json(jornada);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener la jornada' });
    }
};
exports.getJornadaActual = getJornadaActual;
const abrirJornada = async (req, res) => {
    try {
        const jornadaAbierta = await prisma_1.prisma.jornada.findFirst({
            where: { estado: 'abierto' }
        });
        if (jornadaAbierta) {
            return res.status(409).json({ error: 'Ya hay una jornada abierta' });
        }
        const jornada = await prisma_1.prisma.jornada.create({
            data: { estado: 'abierto' }
        });
        await (0, actividadController_1.registrarActividad)('jornada', 'Se abrio el negocio');
        res.status(201).json(jornada);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al abrir el negocio' });
    }
};
exports.abrirJornada = abrirJornada;
const cerrarJornada = async (req, res) => {
    try {
        const jornada = await prisma_1.prisma.jornada.findFirst({
            where: { estado: 'abierto' },
            orderBy: { fecha_apertura: 'desc' }
        });
        if (!jornada) {
            return res.status(409).json({ error: 'No hay una jornada abierta' });
        }
        const fechaCierre = new Date();
        const ventas = await prisma_1.prisma.venta.findMany({
            where: {
                fecha: {
                    gte: jornada.fecha_apertura,
                    lte: fechaCierre
                }
            }
        });
        const totalVendido = ventas.reduce((total, venta) => total + Number(venta.monto), 0);
        const ordenesCompletadas = ventas.length;
        const jornadaCerrada = await prisma_1.prisma.jornada.update({
            where: { id: jornada.id },
            data: {
                estado: 'cerrado',
                fecha_cierre: fechaCierre
            }
        });
        await (0, actividadController_1.registrarActividad)('jornada', `Se cerro el negocio con S/ ${totalVendido.toFixed(2)} en ventas`);
        res.json({
            jornada: jornadaCerrada,
            resumen: {
                totalVendido,
                ordenesCompletadas
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al cerrar el negocio' });
    }
};
exports.cerrarJornada = cerrarJornada;
