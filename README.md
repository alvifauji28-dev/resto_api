# 🍽️ RESTO API

API sederhana untuk manajemen **menu** dan **reservasi restoran**.  
Dibuat dengan **Express.js**.

---

## 🚀 Endpoint Menus

### 1. GET /menus
Ambil semua menu.

**Response:**
```json
{
  "status": "success",
  "count": 4,
  "data": [
    { "id_menu": 1, "menu": "Nasi Goreng", "price": 20000 }
  ]
}
