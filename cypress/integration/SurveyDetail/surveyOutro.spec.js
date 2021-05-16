import { detailUrl, listUrl } from '../../apiEndpoints/survey';
import {
  listSelector,
  detailSelectors,
  outroSelectors,
  questionNavigationSelectors
} from './selectors';

describe('Survey outro', () => {
  beforeEach(() => {
    const surveyId = 'd5de6a8f8f5f1cfe51bc';
    cy.intercept(listUrl, { fixture: 'surveyList.json' });
    cy.intercept(detailUrl(surveyId), { fixture: 'surveyDetail.json' });

    cy.login();
    cy.findAllByTestId(listSelector.showDetail).first().click({ force: true });
    cy.findByTestId(detailSelectors.startSurvey).click();
  });

  context('given the survey is submitted', function () {
    it('shows the outro page', function () {
      const outroMessage =
        'Thank you for taking the time to share your feedback!';
      const totalQuestion = 10;
      let currentQuestion = 1;
      for (currentQuestion; currentQuestion < totalQuestion; currentQuestion++) {
        cy.findByTestId(questionNavigationSelectors.nextQuestion).click();
      }
      cy.findByTestId(questionNavigationSelectors.submitSurvey).click();

      cy.findByTestId(outroSelectors.message).should('have.text', outroMessage);
    });
  });
});
