import express from 'express';
import { getCategorias, crearCategoria, actualizarCategoria, eliminarCategoria} from '../controllers/categoria.controller.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getCategorias);
router.post('/', auth, crearCategoria);
router.put('/:id', auth, actualizarCategoria);
router.delete('/:id', auth, eliminarCategoria);

export default router;