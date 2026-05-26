"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarMesa = exports.actualizarMesa = exports.crearMesa = exports.getMesas = void 0;
const prisma_1 = require("../lib/prisma");
// getMesas -> Obtiene todas las mesas de la base de datos
// async -> Indica que la operación que se realizara puede ser tardada
// await -> Indica a la funcion que debe esperar la respuesta de la base de datos
const getMesas = async (req, res) => {
    try {
        const mesas = await prisma_1.prisma.mesa.findMany();
        res.json(mesas);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener la mesa' });
    }
};
exports.getMesas = getMesas;
// crearMesa -> Crea una nueva mesa con el numero que se le mande
const crearMesa = async (req, res) => {
    try {
        const { id_mesa } = req.body;
        const mesa = await prisma_1.prisma.mesa.create({
            data: {
                id_mesa
            }
        });
        res.status(201).json(mesa);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la mesa' });
    }
};
exports.crearMesa = crearMesa;
const actualizarMesa = async (req, res) => {
    try {
        const { id_mesa } = req.params;
        const { estado } = req.body;
        const mesa = await prisma_1.prisma.mesa.update({
            where: { id_mesa: parseInt(id_mesa) },
            data: { estado }
        });
        res.json(mesa);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar la mesa' });
    }
};
exports.actualizarMesa = actualizarMesa;
const eliminarMesa = async (req, res) => {
    try {
        const { id_mesa } = req.params;
        await prisma_1.prisma.mesa.delete({
            where: { id_mesa: parseInt(id_mesa) },
        });
        res.json({ mensaje: 'Mesa eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar la mesa' });
    }
};
exports.eliminarMesa = eliminarMesa;
//Códigos HTTP — el lenguaje que usan servidores y navegadores para comunicarse:
// Código   Significado
// 200      Todo bien
// 201      Creado exitosamente
// 400      Error del cliente (datos incorrectos)
// 401      No autenticado
// 403      Sin permiso
// 404      No encontrado
// 500      Error del servidor
