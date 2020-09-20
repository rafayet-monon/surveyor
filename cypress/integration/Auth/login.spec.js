const autoRecord = require('cypress-autorecord');

describe('The Login Page', () => {
  autoRecord();

  it('successfully logs in user with valid credentials', function () {
    const valid_email = Cypress.env('CYPRESS_VALID_EMAIL')
    const valid_password = Cypress.env('CYPRESS_VALID_PASSWORD')

    cy.visit('/login')
    cy.get('input[name=email]').type(valid_email)
    cy.get('input[name=password]').type(`${valid_password}{enter}`).should(() => {
      expect(localStorage.getItem('authorization_token')).to.not.be.null
    })
    cy.url().should('include', '/')
  })

  it('shows error if given invalid credentials', function () {
    const invalid_email = 'mock@surveyor.co'
    const invalid_password = '1221121'

    cy.visit('/login')
    cy.get('input[name=email]').type(invalid_email)
    cy.get('input[name=password]').type(`${invalid_password}{enter}`).should(() => {
      expect(localStorage.getItem('authorization_token')).to.be.null
    })
    cy.url().should('include', '/login')
    cy.get('.auth-alert__title').contains('Unable to login');
  })

  it('shows validation error if submitted empty values', function () {
    cy.visit('/login')
    cy.get('form').submit()
    cy.url().should('include', '/login')
    cy
      .get('.validation-error')
      .should(($e) => {
        expect($e).to.have.length(2)
        expect($e).to.contain('Required')
      })
  })
})
