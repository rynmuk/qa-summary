# RBAC – Navigation & Menu Visibility

## Objective
Memastikan menu yang ditampilkan sesuai dengan role user.

## Test Cases

| TC ID   | Role  | Menu                   | Expected Result             |
|---------|-------|------------------------|-----------------------------|
| RBAC-05 | Admin | User Management        | Menu terlihat               |
| RBAC-06 | Staff | User Management        | Menu tidak terlihat         |
| RBAC-07 | Staff | Dashboard              | Menu terlihat               |
