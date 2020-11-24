const autoRecord = require('cypress-autorecord');

describe('The Home Page', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
  })

  it('shows loading screen after successful log in', function () {
    cy.url().should('include', '/')
    cy.get('.react-loading-skeleton').should('exist');
  })

  it('shows home screen after successful login', function () {
    cy.url().should('include', '/')
    cy.get('div[class="home-header__logo"]').find('img').should('be.visible');
    cy.get('[alt="navigation detail icon"]').should('be.visible');
  })
})
