import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import SurveyTextAreaField from 'components/SurveyTextAreaField';
import * as Constants from 'constants/surveyAnswer';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors';

describe('SurveyTextAreaField', () => {
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[8];
  const state = { survey_id: details.data.id, questions: [] };

  it('displays the text area', () => {
    const dispatch = jest.fn();

    const { getByTestId } = render(
      <SurveyAnswerContext.Provider value={{ state, dispatch }}>
        <SurveyTextAreaField
          answers={ question.answers }
          questionId={ question.id }
        />
      </SurveyAnswerContext.Provider>
    );

    expect(getByTestId(questionSelectors.textArea)).toBeInTheDocument();
  });

  describe('given input in the text area', () => {
    it('calls dispatch with selected answer', async () => {
      const dispatch = jest.fn();

      const { getByTestId } = render(
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <SurveyTextAreaField
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      const textInput = 'H'
      const textArea = getByTestId(questionSelectors.textArea);
      fireEvent.change(textArea, { target: { value: textInput } })

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(question.id, question.answers[0].id, textInput)
      });
    });
  });
});
