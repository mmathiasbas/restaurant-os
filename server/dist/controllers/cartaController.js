"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPlato = exports.actualizarPlato = exports.crearPlato = exports.getCartas = void 0;
const prisma_1 = require("../lib/prisma");
const getCartas = async (req, res) => {
    try {
        const cartas = await prisma_1.prisma.carta.findMany();
        res.json(cartas);
    }
    catch (error) {
        res.status(500).send({ error: 'Error al obtener la carta' });
    }
};
exports.getCartas = getCartas;
const crearPlato = async (req, res) => {
    try {
        const { nombre, ingredientes, precio } = req.body;
        const carta = await prisma_1.prisma.carta.create({
            data: { nombre, ingredientes, precio },
        });
        res.status(201).json(carta);
    }
    catch (error) {
        res.status(500).send({ error: 'Error al crear el plato' });
    }
};
exports.crearPlato = crearPlato;
const actualizarPlato = async (req, res) => {
    try {
        const { id_plato } = req.params;
        const { nombre, ingredientes, precio } = req.body;
        const carta = await prisma_1.prisma.carta.update({
            where: { id_plato: parseInt(id_plato) },
            data: { nombre, ingredientes, precio },
        });
        res.json(carta);
    }
    catch (error) {
        res.status(500).send({ error: 'Error al actualizar el plato' });
    }
};
exports.actualizarPlato = actualizarPlato;
const eliminarPlato = async (req, res) => {
    try {
        const { id_plato } = req.params;
        await prisma_1.prisma.carta.delete({
            where: { id_plato: parseInt(id_plato) },
        });
        res.json({ mensaje: 'Plato eliminado correctamente' });
    }
    catch (error) {
        res.status(500).send({ error: 'Error al eliminar el plato' });
    }
};
exports.eliminarPlato = eliminarPlato;
