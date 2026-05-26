-- DropForeignKey
ALTER TABLE "Orden" DROP CONSTRAINT "Orden_id_mesa_fkey";

-- AddForeignKey
ALTER TABLE "Orden" ADD CONSTRAINT "Orden_id_mesa_fkey" FOREIGN KEY ("id_mesa") REFERENCES "Mesa"("id_mesa") ON DELETE CASCADE ON UPDATE CASCADE;
