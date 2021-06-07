import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import NextQuestion from 'components/NextQuestion';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import { nextQuestionSelector } from 'tests/components/NextQuestion/selectors';

describe('NextQuestion', () => {
  const questionId = '123';
  const answerId = 'abc';

  describe('given a question has answer', () => {
    it('navigates to the next question', () => {
      const questionObject = {
        id: questionId,
        answers: [
          {
            id: answerId
          }
        ]
      };

      const state = { survey_id: null, questions: [questionObject] };
      const nextQuestion = jest.fn();

      const { getByTestId } = render(
        <SurveyAnswerContext.Provider value={{ state }}>
          <NextQuestion questionId={ questionId } nextQuestion={ nextQuestion } />
        </SurveyAnswerContext.Provider>
      );

      fireEvent.click(getByTestId(nextQuestionSelector.next));

      expect(nextQuestion).toHaveBeenCalledTimes(1);
    });
  });

  describe('given a question does not have an answer', () => {
    it('does not navigate to the next question', () => {
      const state = { survey_id: null, questions: [] };
      const nextQuestion = jest.fn();

      const { getByTestId } = render(
        <SurveyAnswerContext.Provider value={{ state }}>
          <NextQuestion questionId={ questionId } nextQuestion={ nextQuestion } />
        </SurveyAnswerContext.Provider>
      );

      fireEvent.click(getByTestId(nextQuestionSelector.next));

      expect(nextQuestion).toHaveBeenCalledTimes(0);
    });
  });
});
