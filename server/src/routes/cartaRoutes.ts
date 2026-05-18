import { Router } from 'express';
import { getCartas, crearPlato, actualizarPlato, eliminarPlato} from "../controllers/cartaController";

const router = Router();

router.get('/', getCartas);
router.post('/', crearPlato);
router.put('/:id_plato', actualizarPlato);
router.delete('/:id_plato', eliminarPlato);

export default router;