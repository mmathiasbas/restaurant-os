import { Router } from 'express';
import { getMesas, crearMesa, actualizarMesa, eliminarMesa} from "../controllers/mesaController";
import {verificarToken} from "../middlewares/authMiddleware";
import {verificarRol} from "../middlewares/roleMiddleware";

const router = Router();

router.get('/', verificarToken, getMesas); // Se usa cuando hacen el GET
router.post('/', verificarToken, verificarRol("administrador"), crearMesa); // Se usa cuando hacen el POST
router.put('/:id_mesa', verificarToken, verificarRol("administrador", "cajero"), actualizarMesa);
router.delete('/:id_mesa', verificarToken, verificarRol("administrador"), eliminarMesa);

export default router;