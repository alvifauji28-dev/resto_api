const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Router
const menuRoutes = require('./src/router/menus');
const reservationRoutes = require('./src/router/reservation');

app.use('/menus', menuRoutes);
app.use('/reservations', reservationRoutes);

// Home route
app.get('/', (req, res) => {
  res.send(`<h1>🍽 RESTO API</h1><p>Cek endpoint di /menus dan /reservations</p>`);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
