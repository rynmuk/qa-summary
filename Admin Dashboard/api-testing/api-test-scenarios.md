# Admin Dashboard – API Test Scenarios

Dokumen ini berisi skenario pengujian API untuk aplikasi **Admin Dashboard**.
Pengujian difokuskan pada kontrol akses (RBAC) dan pengelolaan data user
(CRUD User) yang merupakan fitur kritikal pada aplikasi admin.

---

## 🔐 RBAC (Role-Based Access Control)

### Objective
Memastikan setiap endpoint hanya dapat diakses sesuai dengan role user
(Admin / Staff).

### Scope Endpoint
- POST /api/admin/login
- GET /api/admin/users
- POST /api/admin/users
- DELETE /api/admin/users/{id}

### Scenarios
**Positive**
- Admin dapat mengakses seluruh endpoint
- Admin dapat melakukan create & delete user

**Negative**
- Staff tidak dapat mengakses endpoint create user
- Staff tidak dapat mengakses endpoint delete user
- Request tanpa token ditolak
- Request dengan token expired ditolak

### Validation
- Status code sesuai (200 / 401 / 403)
- Response message jelas
- Tidak ada data bocor pada response error

---

## 👤 CRUD User Management

### Objective
Memastikan proses Create, Read, Update, dan Delete user berjalan dengan
benar dan aman.

### Scope Endpoint
- GET /api/admin/users
- POST /api/admin/users
- PUT /api/admin/users/{id}
- DELETE /api/admin/users/{id}

### Scenarios
**Positive**
- Create user dengan data valid
- Get list user dengan token valid
- Update user dengan ID valid
- Delete user dengan ID valid

**Negative**
- Create user dengan email duplikat
- Update user dengan ID tidak ditemukan
- Delete user yang masih memiliki relasi data
- Payload tidak lengkap / format salah

### Validation
- Status code (200 / 201 / 400 / 404 / 422)
- Response body sesuai contract
- Error message konsisten
- Data tersimpan sesuai request

---

## 🧪 General API Validation

- Response time < 3 detik
- Format JSON konsisten
- Tidak ada stack trace di response
- Validasi dilakukan di backend