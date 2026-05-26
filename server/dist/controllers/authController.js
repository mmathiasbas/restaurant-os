"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const prisma_1 = require("../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        const usuario = await prisma_1.prisma.usuario.findUnique({
            where: { correo }
        });
        if (!usuario) {
            return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
        }
        const contrasenaCorrecta = await bcrypt_1.default.compare(contrasena, usuario.contrasena);
        if (!contrasenaCorrecta) {
            return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
        }
        const token = jsonwebtoken_1.default.sign({ id_usuario: usuario.id_usuario, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: '8h' });
        res.json({
            token,
            usuario: {
                id_usuario: usuario.id_usuario,
                nombre: usuario.nombre,
                rol: usuario.rol
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};
exports.login = login;
