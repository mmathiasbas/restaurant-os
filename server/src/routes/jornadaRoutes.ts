import { Router } from 'express';
import { abrirJornada, cerrarJornada, getJornadaActual } from '../controllers/jornadaController';
import { verificarToken } from '../middlewares/authMiddleware';
import { verificarRol } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/actual', verificarToken, verificarRol('administrador', 'mesero', 'cocinero', 'cajero'), getJornadaActual);
router.post('/abrir', verificarToken, verificarRol('administrador'), abrirJornada);
router.post('/cerrar', verificarToken, verificarRol('administrador'), cerrarJornada);

export default router;
