const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');
const auth = require('../middlewares/authMiddleware');

router.get('/', controller.getProductos);
router.get('/:id', controller.getProductoById);
router.post('/', auth, controller.crearProducto);
router.put('/:id', auth, controller.actualizarProducto);
router.delete('/:id', auth, controller.eliminarProducto);

module.exports = router;
