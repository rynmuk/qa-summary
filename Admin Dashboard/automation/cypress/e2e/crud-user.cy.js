describe('CRUD User Management', () => {
  it('Admin can create a new user', () => {
    cy.loginAsAdmin()
    cy.visit('/admin/users/create')

    cy.get('#name').type('QA User')
    cy.get('#email').type('qa.user@mail.com')
    cy.get('#saveBtn').click()

    cy.contains('User created successfully').should('be.visible')
  })
})
