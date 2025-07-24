const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Producto = require('../models/Producto');
const Categoria = require('../models/Categoria');

dotenv.config();

const uri = process.env.MONGO_URI;

const categoriasMock = [
  { nombre: 'Lubricantes' },
  { nombre: 'Filtros' },
  { nombre: 'Baterías' },
];

const productosMock = [
  {
    nombre: 'Aceite 10W40',
    precio: 12000,
    stock: 4,
    imagenUrl: 'https://via.placeholder.com/150',
    categoriaNombre: 'Lubricantes',
  },
  {
    nombre: 'Filtro de Aceite',
    precio: 4000,
    stock: 8,
    imagenUrl: 'https://via.placeholder.com/150',
    categoriaNombre: 'Filtros',
  },
  {
    nombre: 'Batería 12V',
    precio: 25000,
    stock: 2,
    imagenUrl: 'https://via.placeholder.com/150',
    categoriaNombre: 'Baterías',
  },
];

async function cargarDatos() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await Producto.deleteMany();
    await Categoria.deleteMany();

    const categoriasCreadas = await Categoria.insertMany(categoriasMock);
    const mapCategorias = Object.fromEntries(categoriasCreadas.map(c => [c.nombre, c._id]));

    const productosConCategoria = productosMock.map(p => ({
      nombre: p.nombre,
      precio: p.precio,
      stock: p.stock,
      imagenUrl: p.imagenUrl,
      categorias: [mapCategorias[p.categoriaNombre]],
    }));

    await Producto.insertMany(productosConCategoria);

    process.exit();
  } catch (err) {
    console.error('Error al cargar datos:', err.message);
    process.exit(1);
  }
}

cargarDatos();
