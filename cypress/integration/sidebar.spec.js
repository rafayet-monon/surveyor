const autoRecord = require('cypress-autorecord');

describe('The Sidebar', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
  })

  describe('when click on the user avatar', () => {
    it('opens the sidebar', () => {
      cy.get('[alt="USER"]').click();

      cy.get('.sidebar__nav-menu-active').should('exist');
    })
  })

  describe('when the sidebar is already open and click on the user avatar', () => {
    it('closes the sidebar', () => {
      cy.get('[alt="USER"]').click();
      cy.get('[alt="USER"]').click();

      cy.get('.sidebar__nav-menu-active').should('not.exist');
    })
  })
})
