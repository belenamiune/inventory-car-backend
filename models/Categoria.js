const mongoose = require('mongoose');

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

module.exports = mongoose.model('Categoria', CategoriaSchema);
