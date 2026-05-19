import { Router } from 'express';
import { getCartas, crearPlato, actualizarPlato, eliminarPlato} from "../controllers/cartaController";
import {verificarToken} from "../middlewares/authMiddleware";
import {verificarRol} from "../middlewares/roleMiddleware";

const router = Router();

router.get('/', verificarToken, getCartas);
router.post('/', verificarToken, verificarRol("administrador"), crearPlato);
router.put('/:id_plato', verificarToken, verificarRol("administrador"), actualizarPlato);
router.delete('/:id_plato', verificarToken, verificarRol("administrador"), eliminarPlato);

export default router;