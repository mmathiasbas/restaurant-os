import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    try {
        const { correo, contrasena } = req.body;

        const usuario = await prisma.usuario.findUnique({
            where: { correo }
        });

        if (!usuario) {
            return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
        }

        const contrasenaCorrecta = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!contrasenaCorrecta) {
            return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign(
            { id_usuario: usuario.id_usuario, rol: usuario.rol },
            process.env.JWT_SECRET!,
            { expiresIn: '8h' }
        );

        res.json({
            token,
            usuario: {
                id_usuario: usuario.id_usuario,
                nombre: usuario.nombre,
                rol: usuario.rol
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};