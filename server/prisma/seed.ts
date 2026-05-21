import 'dotenv/config';
import { PrismaClient, Rol } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

const adapter = new PrismaPg(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Creando datos de prueba...');

    await prisma.$executeRawUnsafe(
        'TRUNCATE TABLE "Actividad", "Venta", "OrdenItem", "Orden", "Jornada", "Carta", "Mesa", "Usuario" RESTART IDENTITY CASCADE'
    );

    // Usuarios
    const usuarios: { nombre: string; rol: Rol; correo: string; contrasena: string}[] = [
        { nombre: 'Mathias Admin', rol: Rol.administrador, correo: 'administrador@restaurant.com', contrasena: 'admin123'},
        { nombre: 'Juan Mesero', rol: Rol.mesero, correo: 'mesero@restaurant.com', contrasena: 'mesero123'},
        { nombre: 'Pedro Cocinero', rol: Rol.cocinero, correo: 'cocinero@restaurant.com', contrasena: 'cocinero123'},
        { nombre: 'Maria Cajera', rol: Rol.cajero, correo: 'cajero@restaurant.com', contrasena: 'cajero123'},
    ];

    for (const usuario of usuarios) {
        const contrasenaEncriptada = await bcrypt.hash(usuario.contrasena, 10);
        await prisma.usuario.create({
            data: { ...usuario, contrasena: contrasenaEncriptada }
        });
    }

    // Mesas
    for (let i = 1; i <= 8; i++) {
        await prisma.mesa.create({ data: { id_mesa: i } });
    }

    // Carta
    const platos = [
        { nombre: 'Lomo Saltado', ingredientes: 'carne, papas, tomate, cebolla', precio: 25.00 },
        { nombre: 'Aji de Gallina', ingredientes: 'pollo, aji amarillo, pan, nueces', precio: 20.00 },
        { nombre: 'Ceviche', ingredientes: 'pescado, limon, cebolla, aji', precio: 30.00 },
        { nombre: 'Arroz con Leche', ingredientes: 'arroz, leche, canela, azucar', precio: 10.00 },
        { nombre: 'Inca Kola', ingredientes: '', precio: 5.00 },
        { nombre: 'Agua', ingredientes: '', precio: 3.00 },
    ];

    for (const plato of platos) {
        await prisma.carta.create({ data: plato });
    }

    console.log('Datos creados exitosamente');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
