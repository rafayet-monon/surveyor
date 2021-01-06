const autoRecord = require('cypress-autorecord');

describe('User can logout', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
  })

  describe('when click on logout link', () => {
    it('redirects user to login page', () => {
      cy.get('[alt="USER"]').click()
      cy.contains('Logout').click();

      cy.url().should('include', '/login')
    })
  })
})
