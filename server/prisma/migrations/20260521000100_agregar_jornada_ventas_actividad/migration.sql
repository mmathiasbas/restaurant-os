-- CreateEnum
CREATE TYPE "EstadoJornada" AS ENUM ('abierto', 'cerrado');

-- CreateTable
CREATE TABLE "Jornada" (
    "id" SERIAL NOT NULL,
    "fecha_apertura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_cierre" TIMESTAMP(3),
    "estado" "EstadoJornada" NOT NULL DEFAULT 'abierto',

    CONSTRAINT "Jornada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venta" (
    "id" SERIAL NOT NULL,
    "id_orden" INTEGER NOT NULL,
    "id_cajero" INTEGER NOT NULL,
    "monto" DECIMAL(65,30) NOT NULL,
    "metodo_pago" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actividad" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Actividad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Venta_id_orden_key" ON "Venta"("id_orden");

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_id_orden_fkey" FOREIGN KEY ("id_orden") REFERENCES "Orden"("id_orden") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_id_cajero_fkey" FOREIGN KEY ("id_cajero") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
