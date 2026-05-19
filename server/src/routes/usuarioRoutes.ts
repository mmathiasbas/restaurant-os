import { Router } from 'express';
import { getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} from "../controllers/usuarioController";
import {verificarToken} from "../middlewares/authMiddleware";
import {verificarRol} from "../middlewares/roleMiddleware";

const router = Router();

router.get('/', verificarToken, getUsuario);
router.post('/', verificarToken, verificarRol("administrador"), crearUsuario);
router.put('/:id_usario', verificarToken, verificarRol("administrador"), actualizarUsuario);
router.delete('/:id_usuario', verificarToken, verificarRol("administrador"), eliminarUsuario);

export default router;