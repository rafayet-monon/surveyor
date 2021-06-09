import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import SurveyTextField from 'components/SurveyTextField';
import * as Constants from 'constants/surveyAnswer';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors';

describe('SurveyTextField', () => {
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[9];
  const state = { survey_id: details.data.id, questions: [] };

  it('displays the text field', () => {
    const dispatch = jest.fn();

    const { getByTestId } = render(
      <DetailsContext.Provider
        value={{
          surveyDetail: details,
          questionList
        }}
      >
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <SurveyTextField
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      </DetailsContext.Provider>
    );

    expect(getByTestId(questionSelectors.textField)).toBeInTheDocument();
  });

  describe('given input in the text field', () => {
    it('calls dispatch with selected answer', async () => {
      const dispatch = jest.fn();

      const { getAllByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <SurveyTextField
              answers={ question.answers }
              questionId={ question.id }
            />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      const textInput = 'H'
      const textFields = getAllByTestId('survey-textfield-input');

      userEvent.type(textFields[0], textInput)

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: Constants.MULTIPLE_ANSWER,
        data: QuestionObjectBuilder(question.id, question.answers[0].id, textInput)
      });
    });
  });
});
