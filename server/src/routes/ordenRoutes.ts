import { Router } from 'express';
import { getOrden, crearOrden, actualizarOrden, agregarItemsOrden } from "../controllers/ordenController";
import {verificarToken} from "../middlewares/authMiddleware";
import {verificarRol} from "../middlewares/roleMiddleware";
import { verificarJornadaAbierta } from '../middlewares/jornadaMiddleware';

const router = Router();

router.get('/', verificarToken, verificarRol("administrador", "mesero", "cajero", "cocinero"), getOrden);
router.post("/", verificarToken, verificarRol("administrador", "mesero"), verificarJornadaAbierta, crearOrden);
router.post("/:id_orden/items", verificarToken, verificarRol("administrador", "mesero"), verificarJornadaAbierta, agregarItemsOrden);
router.put("/:id_orden", verificarToken, verificarRol("administrador", "mesero", "cocinero", "cajero"), verificarJornadaAbierta, actualizarOrden);

export default router;
