const autoRecord = require('cypress-autorecord');

describe('Expired Login', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
  })

  it('redirects to login page if token is invalid', function () {
    cy.get('div[class="home-header__logo"]').find('img').should('be.visible');
    cy.getCookie('authorization_token').then(() => {
      localStorage.setItem('authorization_token', null);
    });
    cy.reload()
    cy.url().should('include', '/login')
  })
})
