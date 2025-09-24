const ALLOWED_TYPES = ['food', 'beverage'];
const RES_STATUS = ['reserved', 'finished', 'cancelled'];

function validateMenuInput(body) {
  const { menu, type, description, price } = body;
  if (!menu || !type || !description || price == null) return 'Semua field wajib';
  if (!ALLOWED_TYPES.includes(type)) return 'type harus "food" atau "beverage"';
  if (price < 0) return 'price tidak boleh negatif';
  return null;
}

function validateReservation(body) {
  const { reservation_date, guest_count, status = 'reserved', id_customer } = body;
  if (!reservation_date || !guest_count || !id_customer) return 'Field wajib kurang';
  if (guest_count <= 0) return 'guest_count harus > 0';
  if (!RES_STATUS.includes(status)) return 'status tidak valid';
  return null;
}

module.exports = { validateMenuInput, validateReservation };
