import express from "express";
const router = express.Router();

const movimientosFake = [
  { productoId: '1', fecha: '2025-07-20', tipo: 'Ingreso', cantidad: 10 },
  { productoId: '1', fecha: '2025-07-19', tipo: 'Venta', cantidad: -2 },
  { productoId: '2', fecha: '2025-07-18', tipo: 'Ajuste', cantidad: 5 },
];

router.get('/:productoId', (req, res) => {
  const { productoId } = req.params;
  const filtrados = movimientosFake.filter((m) => m.productoId === productoId);
  res.json(filtrados);
});

export default router;
