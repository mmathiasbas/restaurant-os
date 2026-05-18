/*
  Warnings:

  - Changed the type of `rol` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('administrador', 'cocinero', 'mesero', 'cajero');

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "rol",
ADD COLUMN     "rol" "Rol" NOT NULL;
