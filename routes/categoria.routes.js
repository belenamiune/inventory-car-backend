const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria.controller');

router.get('/', controller.getCategorias);
router.post('/', controller.crearCategoria);
router.put('/:id', controller.actualizarCategoria);
router.delete('/:id', controller.eliminarCategoria);

module.exports = router;
