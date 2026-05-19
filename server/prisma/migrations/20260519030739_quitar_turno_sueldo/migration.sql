/*
  Warnings:

  - You are about to drop the column `sueldo` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `turno` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "sueldo",
DROP COLUMN "turno";
