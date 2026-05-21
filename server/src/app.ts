/// <reference types="node" />
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mesaRoutes from './routes/mesaRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import ordenRoutes from './routes/ordenRoutes';
import cartaRoutes from './routes/cartaRoutes';
import authRoutes from './routes/authRoutes';
import adminRoutes from './routes/adminRoutes';
import jornadaRoutes from './routes/jornadaRoutes';
import ventaRoutes from './routes/ventaRoutes';
import actividadRoutes from './routes/actividadRoutes';

const app = express();
const httpServer = createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

app.use(cors());
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/mesas', mesaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/carta', cartaRoutes);
app.use('/ordenes', ordenRoutes);
app.use('/admin', adminRoutes);
app.use('/jornadas', jornadaRoutes);
app.use('/ventas', ventaRoutes);
app.use('/actividades', actividadRoutes);

// Socket.io
io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    socket.on('unirse_sala', (sala: string) => {
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

export default app;
