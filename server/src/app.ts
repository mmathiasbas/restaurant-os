/// <reference types="node" />
import express from 'express';
import cors from 'cors';
import mesaRoutes from "./routes/mesaRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import ordenRoutes from "./routes/ordenRoutes";
import cartaRoutes from "./routes/cartaRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());
app.use(express.json());

//Rutas
app.use('/mesas', mesaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/carta', cartaRoutes);
app.use('/ordenes', ordenRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;