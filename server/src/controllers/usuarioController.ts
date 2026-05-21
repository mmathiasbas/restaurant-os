import { Request, Response } from 'express';
import { prisma } from "../lib/prisma";
import bcrypt from 'bcrypt';

const seleccionSinContrasena = {
    id_usuario: true,
    nombre: true,
    rol: true,
    telefono: true,
    correo: true,
};

export const getUsuario = async (req: Request, res: Response) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            select: seleccionSinContrasena
        });
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

export const crearUsuario = async (req: Request, res: Response) => {
    try {
        const { nombre, rol, telefono, correo, contrasena} = req.body;

        const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);

        const usuario = await prisma.usuario.create({
            data: { nombre, rol, telefono, correo, contrasena: contrasenaEncriptada},
            select: seleccionSinContrasena
        });
        res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const { id_usuario } = req.params;
        const { nombre, rol, telefono, correo, contrasena} = req.body;

        const data: any = { nombre, rol, telefono, correo};

        if (contrasena) {
            data.contrasena = await bcrypt.hash(contrasena, 10);
        }

        const usuario = await prisma.usuario.update({
            where: { id_usuario: parseInt(id_usuario as string) },
            data,
            select: seleccionSinContrasena
        });
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
    try {
        const { id_usuario } = req.params;
        await prisma.usuario.delete({
            where: { id_usuario: parseInt(id_usuario as string) }
        });
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
