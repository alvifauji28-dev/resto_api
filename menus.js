const express = require('express');
const router = express.Router();
let { menus } = require('../db/data');
const { validateMenuInput } = require('../utils/validation');

// GET semua menu
router.get('/', (req, res) => {
  res.json({ count: menus.length, data: menus });
});

// POST tambah menu
router.post('/', (req, res) => {
  const err = validateMenuInput(req.body);
  if (err) return res.status(400).json({ error: err });

  const newMenu = { id_menu: menus.length + 1, ...req.body };
  menus.push(newMenu);
  res.status(201).json(newMenu);
});

module.exports = router;
