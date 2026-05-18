import { Router } from 'express';
import { getMesas, crearMesa, actualizarMesa, eliminarMesa} from "../controllers/mesaController";

const router = Router();

router.get('/', getMesas); // Se usa cuando hacen el GET
router.post('/', crearMesa); // Se usa cuando hacen el POST
router.put('/:id_mesa', actualizarMesa);
router.delete('/:id_mesa', eliminarMesa);

export default router;