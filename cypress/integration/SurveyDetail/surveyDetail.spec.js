import { detailUrl, listUrl } from '../../apiEndpoints/survey';
import { listSelector, detailSelectors } from './selectors';

describe('Survey detail', () => {
  beforeEach(() => {
    const surveyId = 'd5de6a8f8f5f1cfe51bc';
    cy.intercept(listUrl, { fixture: 'surveyList.json' });
    cy.intercept(detailUrl(surveyId), { fixture: 'surveyDetail.json' });

    cy.login();
    cy.findAllByTestId(listSelector.showDetail).first().click({ force: true });
  });

  it('shows the survey information', function () {
    const title = 'Scarlett Bangkok';
    const subTitle =
      'Thank you for visiting Scarlett! Please take a moment to share your feedback.';
    const coverImage =
      'https://dhdbhh0jsld0o.cloudfront.net/m/1ea51560991bcb7d00d0_';

    cy.findByTestId(detailSelectors.coverImage)
      .should('have.attr', 'src')
      .should('include', coverImage);
    cy.findByTestId(detailSelectors.title).should('have.text', title);
    cy.findByTestId(detailSelectors.subTitle).invoke('text').then((text) =>{
      expect(text.replace(/\n/g, '')).to.eq(subTitle)
    })
  });

  it('shows the start survey button', function () {
    const buttonText = 'Start Survey';

    cy.findByTestId(detailSelectors.startSurvey).should('have.text', buttonText);
  });

  context('given the back button is clicked', function () {
    it('redirects to the survey list', function () {
      cy.findByTestId(detailSelectors.backButton).click();

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
    });
  });
});
