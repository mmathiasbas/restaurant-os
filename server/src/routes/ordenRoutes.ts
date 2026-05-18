import { Router } from 'express';
import { getOrden, crearOrden, actualizarOrden } from "../controllers/ordenController";

const router = Router();

router.get('/', getOrden);
router.post("/", crearOrden);
router.put("/:id_orden", actualizarOrden);

export default router;