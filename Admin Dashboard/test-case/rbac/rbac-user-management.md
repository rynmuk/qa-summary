# RBAC – User Management Access

## Objective
Memastikan akses ke fitur User Management sesuai dengan role pengguna.

## Precondition
- User sudah terdaftar di sistem
- Role tersedia: Super Admin, Admin, Staff

## Test Cases

| TC ID   | Role        | Action                                | Expected Result                     |
|---------|-------------|---------------------------------------|-------------------------------------|
| RBAC-01 | Super Admin | Akses menu User Management            | Menu dapat diakses                  |
| RBAC-02 | Admin       | Akses menu User Management            | Menu dapat diakses                  |
| RBAC-03 | Staff       | Akses menu User Management            | Access Denied message muncul        |
| RBAC-04 | Staff       | Akses URL langsung `/admin/users`     | Redirect / forbidden                |
