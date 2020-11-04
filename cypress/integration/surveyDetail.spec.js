const autoRecord = require('cypress-autorecord');

describe('The survey detail page', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
    cy.get('.survey-list__detail-arrow').click()
  })

  it('have the details class', function () {
    cy.get('.survey-detail').should('exist');
  })

  it('goes to survey list if back arrow clicked', function () {
    cy.get('.survey-detail__arrow-left').click()
    cy.url().should('include', '/')
    cy.get('div[class="home-header__logo"]').find('img').should('be.visible');
    cy.get('div[class="survey-list__navigation"]').find('button').should('be.visible');
  })
})
