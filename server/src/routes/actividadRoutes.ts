import { Router } from 'express';
import { getActividades } from '../controllers/actividadController';
import { verificarToken } from '../middlewares/authMiddleware';
import { verificarRol } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/', verificarToken, verificarRol('administrador'), getActividades);

export default router;
