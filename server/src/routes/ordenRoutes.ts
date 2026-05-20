import { Router } from 'express';
import { getOrden, crearOrden, actualizarOrden } from "../controllers/ordenController";
import {verificarToken} from "../middlewares/authMiddleware";
import {verificarRol} from "../middlewares/roleMiddleware";

const router = Router();

router.get('/', verificarToken, verificarRol("administrador", "mesero", "cajero", "cocinero"), getOrden);
router.post("/", verificarToken, verificarRol("mesero"), crearOrden);
router.put("/:id_orden", verificarToken, verificarRol("mesero", "cocinero", "cajero"), actualizarOrden);

export default router;