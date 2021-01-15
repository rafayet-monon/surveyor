const autoRecord = require('cypress-autorecord');

describe('The Forgot Password Page', () => {
  autoRecord();

  beforeEach(() => {
    cy.visit('/forgot-password')
  })

  describe('Form submit with an INVALID email', () => {
    context('given empty email', () => {
      it('shows validation error', () => {
        cy.get('form').submit()
        cy.url().should('include', '/forgot-password')
        cy
          .get('.validation-error')
          .should(($e) => {
            expect($e).to.have.length(1)
            expect($e).to.contain('Required')
          })
      })
    })
  })

  describe('Form submit with a valid email', () => {
    it('Shows success message', function () {
      const valid_email = Cypress.env('CYPRESS_VALID_EMAIL')

      cy.get('input[name=email]').type(`${valid_email}{enter}`)
      cy.url().should('include', '/forgot-password')
      cy.contains("We've emailed you instruction to reset your password.").should('be.visible')
    })
  })

  describe('Given back button is clicked', () => {
    it('goes to login page', () => {
      cy.get('.back-button__back-icon').click()
      cy.url().should('include', '/login')
    })
  })
})
