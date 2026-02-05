Cypress.Commands.add("loginAsAdmin", () => {
  cy.visit("/admin/login");

  cy.get("#username").type(Cypress.env("admin_username"));
  cy.get("#password").type(Cypress.env("admin_password"));
  cy.get("#loginBtn").click();
});

Cypress.Commands.add("loginAsStaff", () => {
  cy.visit("/admin/login");

  cy.get("#username").type(Cypress.env("staff_username"));
  cy.get("#password").type(Cypress.env("staff_password"));
  cy.get("#loginBtn").click();
});
