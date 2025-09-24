const express = require('express');
const router = express.Router();
let { reservations } = require('../db/data');
const { validateReservation } = require('../utils/validation');

// GET semua reservasi
router.get('/', (req, res) => {
  res.json({ count: reservations.length, data: reservations });
});

// POST tambah reservasi
router.post('/', (req, res) => {
  const err = validateReservation(req.body);
  if (err) return res.status(400).json({ error: err });

  const newReservation = { id_reservation: reservations.length + 1, ...req.body };
  reservations.push(newReservation);
  res.status(201).json(newReservation);
});

module.exports = router;
