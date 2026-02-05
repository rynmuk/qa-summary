describe('RBAC Access Control', () => {
  it('Staff should not access user management', () => {
    cy.loginAsStaff()
    cy.visit('/admin/users')

    cy.contains('Access Denied').should('be.visible')
  })
})
