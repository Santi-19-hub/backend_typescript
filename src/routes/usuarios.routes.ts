import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuarioporId, crearUsuario } from '../controllers/usuarios.controllers';

const router = Router();

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarioporId);
router.post('/', crearUsuario);


export default router;