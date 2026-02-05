# Admin Dashboard – QA Testing Project

## 🇮🇩 Bahasa Indonesia

Project ini mensimulasikan aktivitas **Quality Assurance (QA)** pada aplikasi
**Admin Dashboard / Backoffice** yang digunakan untuk mengelola data dan
operasional sistem.

Pengujian dilakukan dengan pendekatan yang menyerupai kondisi kerja QA
di lingkungan profesional, mencakup pengujian manual, API, dan automation
pada fitur-fitur utama.

---

## 📌 Project Overview

**Application Type:**  
Admin / Backoffice Web Application

**User Role (Simulasi):**
- Admin
- Staff

**Objective:**
- Memastikan fitur admin berjalan sesuai requirement
- Mengidentifikasi bug pada flow kritikal
- Memvalidasi integrasi API dan UI

---

## 🔍 Scope Pengujian

### Feature yang Diuji
- Login & Authentication
- CRUD Data (Create, Read, Update, Delete)
- Form Validation
- Search & Filter
- Pagination
- Role & Access Control (simulasi)

---

## 🧪 Jenis Testing

- Functional Testing
- Negative Testing
- Boundary Value Testing
- API Testing (REST)
- UI Automation Testing (selected flow)
- Bug Reporting & Documentation

---

## 🗂️ Struktur Folder

- `test-plan/`  
  Berisi test plan dan test strategy untuk Admin Dashboard

- `test-case/`  
  Berisi test case manual berdasarkan feature dan user flow

- `bug report/`  
  Berisi dokumentasi bug lengkap (steps, actual result, expected result,
  severity, dan priority)

- `api-testing/`  
  Berisi skenario pengujian API dan Postman collection

- `automation/`  
  Berisi automation test untuk fitur utama (misalnya login & CRUD)

- `tools/`  
  Berisi dokumentasi tools atau workflow pendukung (simulasi Jira, dll)

---

## 🛠️ Tools yang Digunakan

- Manual Testing
- Postman (API Testing)
- Cypress / Playwright (Automation – simulasi)
- Git & GitLab
- Jira (workflow simulation)

---

## 🐞 Contoh Bug yang Ditemukan

- User tanpa role tertentu masih dapat mengakses menu admin
- Validasi form tidak konsisten antara frontend dan backend
- Pagination error pada halaman terakhir
- API mengembalikan status 200 dengan data error

---

## 🎯 Tujuan Project

Project ini dibuat untuk:
- Menunjukkan pendekatan QA dalam menguji aplikasi Admin
- Mendokumentasikan test case dan bug secara terstruktur
- Mensimulasikan workflow QA di project nyata

---

---

## 🇬🇧 English Version

This project simulates **Quality Assurance (QA)** activities for an
**Admin Dashboard / Backoffice application** used to manage system data
and operational processes.

The testing approach reflects real-world QA workflows, covering manual
testing, API testing, and automation for key features.

---

## 📌 Project Overview

**Application Type:**  
Admin / Backoffice Web Application

**User Roles (Simulation):**
- Admin
- Staff

**Objectives:**
- Ensure admin features meet requirements
- Identify bugs in critical user flows
- Validate UI and API integration

---

## 🔍 Testing Scope

### Tested Features
- Login & Authentication
- CRUD Operations
- Form Validation
- Search & Filtering
- Pagination
- Role & Access Control (simulation)

---

## 🧪 Types of Testing

- Functional Testing
- Negative Testing
- Boundary Value Testing
- API Testing (REST)
- UI Automation Testing (selected flows)
- Bug Reporting & Documentation

---

## 🗂️ Folder Structure

- `test-plan/`  
  Contains the test plan and test strategy for the Admin Dashboard

- `test-case/`  
  Contains manual test cases based on application features and user flows

- `bug report/`  
  Contains detailed bug reports including reproduction steps, actual results,
  expected results, severity, and priority

- `api-testing/`  
  Contains API test scenarios and Postman collections

- `automation/`  
  Contains automated tests for selected critical features

- `tools/`  
  Contains supporting tools documentation or workflows (Jira simulation, etc.)

---

## 🛠️ Tools Used

- Manual Testing
- Postman (API Testing)
- Cypress / Playwright (Automation – simulation)
- Git & GitLab
- Jira (workflow simulation)

---

## 🐞 Sample Bugs Found

- Users without proper roles can access restricted admin menus
- Inconsistent form validation between frontend and backend
- Pagination issues on the last page
- API returns HTTP 200 with invalid data

---

## 🎯 Project Purpose

This project aims to:
- Demonstrate a QA mindset in testing admin applications
- Document test cases and bug reports in a structured way
- Simulate real-world QA workflows

---