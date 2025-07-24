const express = require('express');
const cors = require('cors');

const productoRoutes = require('./routes/producto.routes');
const categoriaRoutes = require('./routes/categoria.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);

module.exports = app;
