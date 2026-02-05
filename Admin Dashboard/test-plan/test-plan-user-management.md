# Test Plan – User Management (RBAC & CRUD Users)

## 1. Introduction
This Test Plan describes the testing approach, scope, resources, and schedule for the **User Management module** in the Admin Dashboard application.  
The focus of this testing is to ensure correct implementation of **Role-Based Access Control (RBAC)** and **CRUD (Create, Read, Update, Delete) Users** functionality.

## 2. Objectives
- Verify RBAC enforcement across UI and API layers
- Validate CRUD Users functionality
- Ensure security rules prevent unauthorized access
- Confirm system stability and data integrity

## 3. Scope

### 3.1 In Scope
- User login & authorization
- RBAC for Admin, Editor, and Staff roles
- User Management features:
  - Create User
  - View User List
  - Update User
  - Delete User
- API access control for user-related endpoints
- Audit logging for user actions

### 3.2 Out of Scope
- Authentication implementation (password hashing, encryption)
- Performance stress testing
- Third-party integrations
- UI/UX visual design testing

## 4. Test Items
- Admin Dashboard Web Application
- User Management Module
- User API Endpoints

## 5. Test Types
- Functional Testing
- Security Testing (RBAC)
- API Testing
- Regression Testing
- Smoke Testing
- Negative Testing
- Boundary & Edge Case Testing

## 6. Test Environment
| Item     | Value              |
|----------|--------------------|
| OS       | Windows / Linux    |
| Browser  | Chrome (latest)    |
| Backend  | REST API           |
| Database | PostgreSQL / MySQL |
| Tools    | Cypress, Postman   |

## 7. Test Data
- Admin user account
- Editor user account
- Staff user account
- Active & inactive users
- Valid and invalid user credentials

## 8. Entry Criteria
- Test environment is ready
- User roles configured
- Test data available
- Build deployed successfully

## 9. Exit Criteria
- All critical and high-priority test cases executed
- No open critical defects
- Test report approved

## 10. Deliverables
- Test Plan document
- Test Cases (XLSX)
- Bug Reports
- Test Execution Report

## 11. Risks & Mitigation
| Risk                    | Mitigation                  |
|-------------------------|-----------------------------|
| Incomplete RBAC rules   | Early security testing      |
| Limited test data       | Create dummy users          |
| Environment instability | Smoke test before execution |

## 12. Approval
| Name            | Role     | Date |
|-----------------|----------|------|
| QA Engineer     | Tester   |   —  |
| Project Manager | Reviewer |   —  |
