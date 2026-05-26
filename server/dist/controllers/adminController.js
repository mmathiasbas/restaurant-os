"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetDemo = void 0;
const child_process_1 = require("child_process");
const prisma_1 = require("../lib/prisma");
const resetDemo = async (req, res) => {
    try {
        await prisma_1.prisma.jornada.updateMany({
            where: { estado: 'abierto' },
            data: {
                estado: 'cerrado',
                fecha_cierre: new Date()
            }
        });
        (0, child_process_1.exec)('pnpm prisma migrate reset --force && pnpm tsx prisma/seed.ts', { cwd: process.cwd(), shell: 'cmd.exe' }, (error, stdout, stderr) => {
            if (error) {
                console.error('Error al reiniciar demo:', error, stdout, stderr);
                return res.status(500).json({ error: 'Error al reiniciar demo' });
            }
            res.json({ mensaje: 'Demo reiniciada correctamente' });
        });
    }
    catch (error) {
        console.error('Error al reiniciar demo:', error);
        res.status(500).json({ error: 'Error al reiniciar la demo' });
    }
};
exports.resetDemo = resetDemo;
