const autoRecord = require('cypress-autorecord');

describe('Expired Login', () => {
  autoRecord();

  beforeEach(() => {
    cy.login()
  })

  it('refreshes auth token if token is invalid', () => {
    cy.getCookie('authorization_token').then(() => {
      localStorage.setItem('authorization_token', null);
    });
    cy.reload()
    cy.url().should('include', '/')
  })

  it('redirects to login page if refresh token is invalid', () => {
    cy.getCookie('authorization_token').then(() => {
      localStorage.setItem('authorization_token', null);
      localStorage.setItem('refresh_token', null);
    });
    cy.reload()
    cy.url().should('include', '/login')
  })
})
