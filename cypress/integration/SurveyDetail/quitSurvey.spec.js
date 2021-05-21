import { detailUrl, listUrl } from '../../apiEndpoints/survey';
import { listSelector, detailSelectors, quitSurveySelectors } from './selectors';

describe('Quit survey', () => {
  beforeEach(() => {
    const surveyId = 'd5de6a8f8f5f1cfe51bc';
    cy.intercept(listUrl, { fixture: 'surveyList.json' });
    cy.intercept(detailUrl(surveyId), { fixture: 'surveyDetail.json' });

    cy.login();
    cy.findAllByTestId(listSelector.showDetail).first().click({ force: true });
    cy.findByTestId(detailSelectors.startSurvey).click()
  });

  context('given the quit icon is clicked', function () {
    it('shows the warning modal', function () {
      const modalHeader = 'Warning!'
      const modalBody = 'Are you sure you want to quit the survey?'
      const confirmText = 'Yes'
      const cancelText = 'Cancel'

      cy.findByTestId(quitSurveySelectors.quitIcon).click();
      cy.findByTestId(quitSurveySelectors.quitModal).within((modal) => {
        expect(modal).to.contain(modalHeader)
        expect(modal).to.contain(modalBody)
        cy.findByTestId(quitSurveySelectors.confirmQuit).should('have.text', confirmText);
        cy.findByTestId(quitSurveySelectors.cancelQuit).should('have.text', cancelText);
      })

    });

    context('given the Yes button is clicked', function () {
      it('redirects to the survey list', function () {
        cy.findByTestId(quitSurveySelectors.quitIcon).click();
        cy.findByTestId(quitSurveySelectors.confirmQuit).click();

        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/');
        });
      });
    });

    context('given the Cancel button is clicked', function () {
      it('closes the modal', function () {
        const surveyId = 'd5de6a8f8f5f1cfe51bc';

        cy.findByTestId(quitSurveySelectors.quitIcon).click();
        cy.findByTestId(quitSurveySelectors.cancelQuit).click();

        cy.location().should((loc) => {
          expect(loc.pathname).to.eq(`/survey/${surveyId}`);
        });
        cy.findByTestId(quitSurveySelectors.quitModal).should('not.exist');
      });
    });
  });
});
