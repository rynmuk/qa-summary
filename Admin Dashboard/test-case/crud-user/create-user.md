# CRUD User – Create User

## Objective
Memastikan Admin dapat membuat user baru dengan data valid.

## Precondition
- Login sebagai Admin
- Berada di halaman Create User

## Test Cases

| TC ID | Scenario                        | Expected Result                     |
|------ |---------------------------------|-------------------------------------|
| CU-01 | Input data user valid           | User berhasil dibuat                |
| CU-02 | Email sudah terdaftar           | Validasi error muncul               |
| CU-03 | Field mandatory kosong          | Validasi field muncul               |
| CU-04 | Role tidak dipilih              | Error role required                 |
.................................................................................