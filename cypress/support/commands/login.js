Cypress.Commands.add('login', (email, password) => {
  const valid_email = email || Cypress.env('CYPRESS_VALID_EMAIL')
  const valid_password = password || Cypress.env('CYPRESS_VALID_PASSWORD')

  cy.visit('/login')
  cy.get('input[name=email]').type(valid_email)
  cy.get('input[name=password]').type(`${valid_password}{enter}`)
})
