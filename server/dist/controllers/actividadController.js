"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActividades = exports.registrarActividad = void 0;
const prisma_1 = require("../lib/prisma");
const app_1 = require("../app");
const registrarActividad = async (tipo, descripcion) => {
    const actividad = await prisma_1.prisma.actividad.create({
        data: { tipo, descripcion }
    });
    // Emitir evento en tiempo real
    if (app_1.io) {
        app_1.io.emit('nueva_actividad', actividad);
    }
    return actividad;
};
exports.registrarActividad = registrarActividad;
const getActividades = async (req, res) => {
    try {
        const actividades = await prisma_1.prisma.actividad.findMany({
            orderBy: { fecha: 'desc' },
            take: 10
        });
        res.json(actividades);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener actividades' });
    }
};
exports.getActividades = getActividades;
