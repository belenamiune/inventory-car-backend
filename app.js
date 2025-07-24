import express from 'express';
import cors from 'cors';
import productoRoutes from './routes/producto.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
import authRoutes from './routes/auth.routes.js';
import movimientosRoutes from "./routes/movimientos.routes.js"
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/movimientos', movimientosRoutes);

export default app;
