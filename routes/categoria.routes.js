const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria.controller');
const auth = require('../middlewares/authMiddleware');

router.get('/', controller.getCategorias);
router.post('/', auth, controller.crearCategoria);
router.put('/:id', auth, controller.actualizarCategoria);
router.delete('/:id', auth, controller.eliminarCategoria);

module.exports = router;
