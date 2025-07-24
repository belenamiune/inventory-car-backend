import Producto from '../models/Producto.js';

export const getProductos = async (req, res) => {
  try {
    const { nombre, stockMenor, categoria, precioMin, precioMax, limit = 10, offset = 0 } = req.query;

    let filtro = {};

    if (nombre) {
      filtro.nombre = { $regex: nombre, $options: 'i' };
    }

    if (stockMenor) {
      filtro.stock = { $lt: Number(stockMenor) };
    }

    if (categoria) {
      filtro.categorias = categoria;
    }

    if (precioMin || precioMax) {
      filtro.precio = {};
      if (precioMin) filtro.precio.$gte = Number(precioMin);
      if (precioMax) filtro.precio.$lte = Number(precioMax);
    }

    const productos = await Producto.find(filtro)
      .skip(Number(offset))
      .limit(Number(limit))
      .populate('categorias');

    const total = await Producto.countDocuments(filtro);

    res.json({
      total,
      limit: Number(limit),
      offset: Number(offset),
      data: productos,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).populate('categorias');
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const eliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
