import { Router } from 'express';
import { getVentas } from '../controllers/ventaController';
import { verificarToken } from '../middlewares/authMiddleware';
import { verificarRol } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/', verificarToken, verificarRol('administrador'), getVentas);

export default router;
