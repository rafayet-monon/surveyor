import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import NetPromotingScore from 'components/NetPromotingScore';
import * as Constants from 'constants/surveyAnswer';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('NetPromotingScore', () => {
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[7];
  const state = { survey_id: details.data.id, questions: [] };

  describe('given an score is clicked', () => {
    it('calls dispatch with selected answer', () => {
      const dispatch = jest.fn();

      const { getByText } = render(
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <NetPromotingScore
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      const desiredScore = '5';
      const score = getByText(desiredScore);
      fireEvent.click(score);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(
          question.id,
          question.answers[desiredScore].id
        )
      });
    });

    it("adds the class 'np-score__number--selected' to the emoji", () => {
      const dispatch = jest.fn();

      const { getByText } = render(
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <NetPromotingScore
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      const desiredScore = '5';
      const score = getByText(desiredScore);
      fireEvent.click(score);

      expect(score.className.includes('np-score__number--selected')).toBe(true);
    });

    it("adds the class 'np-score__number--selected' to all the previous emojis", () => {
      const dispatch = jest.fn();

      const { getByText } = render(
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <NetPromotingScore
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      const desiredScore = '1';
      const previousScore = '0';
      const selectedScore = getByText(desiredScore);
      const expectedScore = getByText(previousScore);
      fireEvent.click(selectedScore);

      expect(
        expectedScore.className.includes('np-score__number--selected')
      ).toBe(true);
    });

    it("does not add the class 'np-score__number--selected' to all the next emojis", () => {
      const dispatch = jest.fn();

      const { getByText } = render(
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <NetPromotingScore
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      const desiredScore = '9';
      const nextScore = '10';
      const selectedScore = getByText(desiredScore);
      const expectedScore = getByText(nextScore);
      fireEvent.click(selectedScore);

      expect(
        expectedScore.className.includes('np-score__number--selected')
      ).toBe(false);
    });
  });
});
