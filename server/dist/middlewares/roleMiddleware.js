"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarRol = void 0;
const verificarRol = (...rolesPermitidos) => {
    return (req, res, next) => {
        const usuario = req.usuario;
        if (!usuario) {
            return res.status(401).json({ error: 'No autenticado' });
        }
        if (!rolesPermitidos.includes(usuario.rol)) {
            return res.status(403).json({ error: 'No tienes permiso para esta acción' });
        }
        next();
    };
};
exports.verificarRol = verificarRol;
