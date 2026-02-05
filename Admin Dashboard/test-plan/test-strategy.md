# Test Strategy – RBAC & CRUD Users

## 1. Overview
This document defines the overall testing strategy for validating **RBAC and CRUD Users** functionality in the Admin Dashboard system.

## 2. Testing Approach

### 2.1 Manual Testing
Manual testing will be used for:
- Exploratory testing
- UI validation
- Business rule validation
- Edge case scenarios

### 2.2 Automation Testing
Automation will focus on:
- RBAC enforcement
- CRUD user workflows
- Regression scenarios
- Smoke tests

**Automation Tools:**
- Cypress (UI)
- Postman (API)

## 3. RBAC Testing Strategy
RBAC testing will ensure:
- Role-based menu visibility
- API access control
- Forbidden direct URL access
- Unauthorized action prevention

### Roles Covered
| Role   | Access Level           |
|--------|------------------------|
| Admin  | Full access            |
| Editor | Limited CRUD           |
| Staff  | Read-only / restricted |

## 4. CRUD Users Testing Strategy

### Create User
- Valid input
- Invalid input
- Duplicate data
- Role assignment

### Read User
- List visibility
- Pagination
- Role-based filtering

### Update User
- Profile update
- Role change
- Status change
- Security validation

### Delete User
- Confirmation modal
- Cancel action
- RBAC enforcement
- Data integrity

## 5. API Testing Strategy
- Token-based authentication
- Role-based authorization
- Positive & negative scenarios
- HTTP status validation

## 6. Test Execution Flow
1. Smoke Test
2. RBAC Validation
3. CRUD Functional Testing
4. API Testing
5. Regression Testing

## 7. Defect Management
- Tool: GitLab Issues
- Severity classification:
  - Critical
  - High
  - Medium
  - Low
- Defects linked to test cases

## 8. Reporting
- Daily execution status
- Defect summary
- Final test report

## 9. Continuous Improvement
- Improve automation coverage
- Refactor flaky tests
- Enhance RBAC test depth
