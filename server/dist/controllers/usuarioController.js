"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.crearUsuario = exports.getUsuario = void 0;
const prisma_1 = require("../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seleccionSinContrasena = {
    id_usuario: true,
    nombre: true,
    rol: true,
    telefono: true,
    correo: true,
};
const getUsuario = async (req, res) => {
    try {
        const usuarios = await prisma_1.prisma.usuario.findMany({
            select: seleccionSinContrasena
        });
        res.json(usuarios);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
exports.getUsuario = getUsuario;
const crearUsuario = async (req, res) => {
    try {
        const { nombre, rol, telefono, correo, contrasena } = req.body;
        const contrasenaEncriptada = await bcrypt_1.default.hash(contrasena, 10);
        const usuario = await prisma_1.prisma.usuario.create({
            data: { nombre, rol, telefono, correo, contrasena: contrasenaEncriptada },
            select: seleccionSinContrasena
        });
        res.status(201).json(usuario);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};
exports.crearUsuario = crearUsuario;
const actualizarUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const { nombre, rol, telefono, correo, contrasena } = req.body;
        const data = { nombre, rol, telefono, correo };
        if (contrasena) {
            data.contrasena = await bcrypt_1.default.hash(contrasena, 10);
        }
        const usuario = await prisma_1.prisma.usuario.update({
            where: { id_usuario: parseInt(id_usuario) },
            data,
            select: seleccionSinContrasena
        });
        res.json(usuario);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        await prisma_1.prisma.usuario.delete({
            where: { id_usuario: parseInt(id_usuario) }
        });
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    }
    catch (err) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
exports.eliminarUsuario = eliminarUsuario;
