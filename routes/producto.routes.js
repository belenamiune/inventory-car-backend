const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');

router.get('/', controller.getProductos);
router.get('/:id', controller.getProductoById);
router.post('/', controller.crearProducto);
router.put('/:id', controller.actualizarProducto);
router.delete('/:id', controller.eliminarProducto);

module.exports = router;
