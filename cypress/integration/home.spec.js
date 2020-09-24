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

  it('shows loading screen after successful log', function () {
    cy.url().should('include', '/')
    cy.get('div[class="home-header__logo"]').find('img').should('be.visible');
    cy.get('div[class="survey-list__navigation"]').find('button').should('be.visible');
  })
})
