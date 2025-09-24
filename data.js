let menus = [
  { id_menu: 1, menu: "Nasi Goreng", type: "food", description: "Nasi goreng spesial", price: 20000, availability: true },
  { id_menu: 2, menu: "Es Teh Manis", type: "beverage", description: "Teh manis dingin", price: 5000, availability: true }
];

let reservations = [
  { id_reservation: 1, reservation_date: "2025-09-25T19:00:00", guest_count: 4, status: "reserved", id_customer: "Andi" }
];

module.exports = { menus, reservations };
