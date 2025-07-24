import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch((err) => console.error('Error conectando MongoDB:', err));
