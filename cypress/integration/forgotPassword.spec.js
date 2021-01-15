const autoRecord = require('cypress-autorecord');

describe('The Forgot Password Page', () => {
  autoRecord();

  beforeEach(() => {
    cy.visit('/forgot-password')
  })

  describe('Form submit with an invalid data', () => {
    context('given an empty email', () => {
      it('shows required field validation error', () => {
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

    context('given an invalid email', () => {
      it('shows invalid email validation error', () => {
        const invalidEmail = 'email@invalid'

        cy.get('input[name=email]').type(`${invalidEmail}{enter}`)
        cy.url().should('include', '/forgot-password')
        cy
          .get('.validation-error')
          .should(($e) => {
            expect($e).to.have.length(1)
            expect($e).to.contain('Invalid email address')
          })
      })
    })
  })

  describe('Form submit with a valid email', () => {
    it('Shows success message', function () {
      const validEmail = Cypress.env('CYPRESS_VALID_EMAIL')

      cy.get('input[name=email]').type(`${validEmail}{enter}`)
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
