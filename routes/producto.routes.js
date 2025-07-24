import express from 'express';
import { getProductos, getProductoById, crearProducto, actualizarProducto, eliminarProducto} from '../controllers/producto.controller.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getProductos);
router.get('/:id', getProductoById);
router.post('/', auth, crearProducto);
router.put('/:id', auth, actualizarProducto);
router.delete('/:id', auth, eliminarProducto);

export default router;
