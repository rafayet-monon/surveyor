const autoRecord = require('cypress-autorecord');

describe('The Sidebar', () => {
  autoRecord();

  before(() => {
    cy.login()
  })

  it('click in the user avatar opens sidebar', function () {
    cy.get('[alt="USER"]').click()

    cy.get('.sidebar__nav-menu-active').should('exist');
  })

  it('click in the user avatar in the sidebar closes the sidebar', function () {
    cy.get('[alt="USER"]').click()

    cy.get('.sidebar__nav-menu-active').should('not.exist');
  })
})
