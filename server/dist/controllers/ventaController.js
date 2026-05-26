"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVentas = void 0;
const prisma_1 = require("../lib/prisma");
const getVentas = async (req, res) => {
    try {
        const ventas = await prisma_1.prisma.venta.findMany({
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
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener ventas' });
    }
};
exports.getVentas = getVentas;
