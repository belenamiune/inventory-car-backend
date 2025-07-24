import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  padre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    default: null,
  },
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);
export default Categoria;
