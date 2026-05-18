-- CreateEnum
CREATE TYPE "EstadoMesa" AS ENUM ('vacia', 'ocupada', 'por_pagar');

-- CreateEnum
CREATE TYPE "EstadoOrden" AS ENUM ('pendiente', 'en_preparacion', 'lista', 'entregada', 'pagada', 'cancelada');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "telefono" TEXT,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "turno" TEXT NOT NULL,
    "sueldo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Carta" (
    "id_plato" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ingredientes" TEXT,
    "precio" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Carta_pkey" PRIMARY KEY ("id_plato")
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id_mesa" INTEGER NOT NULL,
    "estado" "EstadoMesa" NOT NULL DEFAULT 'vacia',

    CONSTRAINT "Mesa_pkey" PRIMARY KEY ("id_mesa")
);

-- CreateTable
CREATE TABLE "Orden" (
    "id_orden" SERIAL NOT NULL,
    "id_mesero" INTEGER NOT NULL,
    "id_mesa" INTEGER NOT NULL,
    "precio_total" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "estado" "EstadoOrden" NOT NULL DEFAULT 'pendiente',
    "fecha_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id_orden")
);

-- CreateTable
CREATE TABLE "OrdenItem" (
    "id" SERIAL NOT NULL,
    "id_orden" INTEGER NOT NULL,
    "id_plato" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrdenItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "Orden" ADD CONSTRAINT "Orden_id_mesero_fkey" FOREIGN KEY ("id_mesero") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orden" ADD CONSTRAINT "Orden_id_mesa_fkey" FOREIGN KEY ("id_mesa") REFERENCES "Mesa"("id_mesa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenItem" ADD CONSTRAINT "OrdenItem_id_orden_fkey" FOREIGN KEY ("id_orden") REFERENCES "Orden"("id_orden") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenItem" ADD CONSTRAINT "OrdenItem_id_plato_fkey" FOREIGN KEY ("id_plato") REFERENCES "Carta"("id_plato") ON DELETE RESTRICT ON UPDATE CASCADE;
