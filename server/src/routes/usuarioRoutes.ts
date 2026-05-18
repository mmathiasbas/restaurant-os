import { Router } from 'express';
import { getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} from "../controllers/usuarioController";

const router = Router();

router.get('/', getUsuario);
router.post('/', crearUsuario);
router.put('/:id_usario', actualizarUsuario);
router.delete('/:id_usuario', eliminarUsuario);

export default router;