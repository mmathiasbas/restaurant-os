"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
/// <reference types="node" />
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const mesaRoutes_1 = __importDefault(require("./routes/mesaRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const ordenRoutes_1 = __importDefault(require("./routes/ordenRoutes"));
const cartaRoutes_1 = __importDefault(require("./routes/cartaRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const jornadaRoutes_1 = __importDefault(require("./routes/jornadaRoutes"));
const ventaRoutes_1 = __importDefault(require("./routes/ventaRoutes"));
const actividadRoutes_1 = __importDefault(require("./routes/actividadRoutes"));
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
exports.io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use('/auth', authRoutes_1.default);
app.use('/mesas', mesaRoutes_1.default);
app.use('/usuarios', usuarioRoutes_1.default);
app.use('/carta', cartaRoutes_1.default);
app.use('/ordenes', ordenRoutes_1.default);
app.use('/admin', adminRoutes_1.default);
app.use('/jornadas', jornadaRoutes_1.default);
app.use('/ventas', ventaRoutes_1.default);
app.use('/actividades', actividadRoutes_1.default);
// Socket.io
exports.io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);
    socket.on('unirse_sala', (sala) => {
        socket.join(sala);
        console.log(`Socket ${socket.id} se unió a la sala: ${sala}`);
    });
    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
    });
});
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
exports.default = app;
