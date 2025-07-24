const Categoria = require('../models/Categoria');

exports.getCategorias = async (req, res) => {
  try {
    const { nombre, padre, limit = 20, offset = 0 } = req.query;

    let filtro = {};

    if (nombre) {
      filtro.nombre = { $regex: nombre, $options: 'i' };
    }

    if (padre === 'null') {
      filtro.padre = null;
    } else if (padre) {
      filtro.padre = padre;
    }

    const categorias = await Categoria.find(filtro)
      .skip(Number(offset))
      .limit(Number(limit))
      .populate('padre');

    const total = await Categoria.countDocuments(filtro);

    res.json({
      total,
      limit: Number(limit),
      offset: Number(offset),
      data: categorias,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crearCategoria = async (req, res) => {
  try {
    const nueva = new Categoria(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.actualizarCategoria = async (req, res) => {
  try {
    const actualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.eliminarCategoria = async (req, res) => {
  try {
    const eliminada = await Categoria.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json({ mensaje: 'Categoría eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
