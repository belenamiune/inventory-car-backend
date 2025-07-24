import mongoose from 'mongoose';

const MovimientoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['entrada', 'salida'],
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  motivo: String,
  fecha: {
    type: Date,
    default: Date.now,
  }
});

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  imagenUrl: {
    type: String,
    default: '',
  },
  categorias: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
  }],
  historialMovimientos: [MovimientoSchema],
});

const Producto = mongoose.model('Producto', ProductoSchema);
export default Producto;
