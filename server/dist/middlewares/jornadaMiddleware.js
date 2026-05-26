"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarJornadaAbierta = void 0;
const prisma_1 = require("../lib/prisma");
const verificarJornadaAbierta = async (req, res, next) => {
    try {
        const jornada = await prisma_1.prisma.jornada.findFirst({
            where: { estado: 'abierto' }
        });
        if (!jornada) {
            return res.status(403).json({ error: 'El negocio esta cerrado. Abre una jornada para operar.' });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al verificar la jornada' });
    }
};
exports.verificarJornadaAbierta = verificarJornadaAbierta;
