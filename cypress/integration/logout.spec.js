const autoRecord = require('cypress-autorecord');

describe('User can logout', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
  })

  it('when click in logout redirects user to login', function () {
    cy.get('[alt="USER"]').click()
    cy.contains('Logout').click();

    cy.url().should('include', '/login')
  })
})
