# Defect Management Workflow (Jira)

## 1. Purpose
This document describes the defect management workflow used for handling bugs related to **RBAC and CRUD Users** in the Admin Dashboard project.

## 2. Tools
- Issue Tracking: Jira
- Repository: GitLab
- Automation: Cypress
- API Testing: Postman

## 3. Bug Lifecycle

### Status Flow
1. Open
2. In Progress
3. Fixed
4. Ready for Retest
5. Retest
6. Closed
7. Reopened

## 4. Severity Levels
| Severity | Description                                |
|----------|--------------------------------------------|
| Critical | Security issues, RBAC bypass, system crash |
| High     | Core functionality broken                  |
| Medium   | Partial functionality issue                |
| Low      | UI/UX or cosmetic issue                    |

## 5. Priority Levels
| Priority | Description            |
|----------|------------------------|
| P1       | Immediate fix required |
| P2       | Fix in current sprint  |
| P3       | Fix when possible      |
| P4       | Nice to have           |

## 6. Bug Assignment Rules
- RBAC & Security bugs → Backend Team
- UI bugs → Frontend Team
- API validation bugs → Backend Team
- Automation-related issues → QA Automation

## 7. Bug Reporting Guidelines
- Clear title
- Reproducible steps
- Correct severity & priority
- Attach evidence if available

## 8. Bug Retest Process
- QA verifies fix on same environment
- Update status to Closed or Reopened
- Link bug to related test case

## 9. Metrics Tracked
- Open vs Closed defects
- Defects by severity
- Defect leakage
- Reopen rate
