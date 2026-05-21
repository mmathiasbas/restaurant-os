import { Router } from 'express';
import { resetDemo } from '../controllers/adminController';
import { verificarToken } from '../middlewares/authMiddleware';
import { verificarRol } from '../middlewares/roleMiddleware';

const router = Router();

router.post('/reset-demo', verificarToken, verificarRol('administrador'), resetDemo);

export default router;
