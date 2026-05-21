import { Request, Response } from 'express';
import { exec } from 'child_process';
import { prisma } from '../lib/prisma';

export const resetDemo = async (req: Request, res: Response) => {
    try {
        await prisma.jornada.updateMany({
            where: { estado: 'abierto' },
            data: {
                estado: 'cerrado',
                fecha_cierre: new Date()
            }
        });

        exec(
            'pnpm prisma migrate reset --force && pnpm tsx prisma/seed.ts',
            { cwd: process.cwd(), shell: 'cmd.exe' },
            (error, stdout, stderr) => {
                if (error) {
                    console.error('Error al reiniciar demo:', error, stdout, stderr);
                    return res.status(500).json({ error: 'Error al reiniciar demo' });
                }

                res.json({ mensaje: 'Demo reiniciada correctamente' });
            }
        );
    } catch (error) {
        console.error('Error al reiniciar demo:', error);
        res.status(500).json({ error: 'Error al reiniciar la demo' });
    }
};
