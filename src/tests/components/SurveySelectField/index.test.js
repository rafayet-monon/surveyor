import React from 'react';

import { render, waitForElement, fireEvent } from '@testing-library/react';

import SurveySelectField from 'components/SurveySelectField';
import * as Constants from 'constants/surveyAnswer';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponseTwo.json';
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors';

describe('SurveySelectField', () => {
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[0];
  const state = { survey_id: details.data.id, questions: [] };

  it('displays the dropdown', () => {
    const dispatch = jest.fn();

    const { getByTestId } = render(
      <DetailsContext.Provider
        value={{
          surveyDetail: details,
          questionList
        }}
      >
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <SurveySelectField
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      </DetailsContext.Provider>
    );

    expect(getByTestId(questionSelectors.dropdown)).toBeInTheDocument();
  });

  describe('given a option is selected', () => {
    it('calls dispatch with selected answer', async () => {
      const dispatch = jest.fn();

      const { getByTestId, getByText } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <SurveySelectField
              answers={ question.answers }
              questionId={ question.id }
            />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      const parentComponent = getByTestId(questionSelectors.dropdown);
      fireEvent.keyDown(parentComponent.firstChild, { key: 'ArrowDown' });
      await waitForElement(() => getByText('Asoke'));
      fireEvent.click(getByText('Asoke'));

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(question.id, question.answers[0].id)
      });
    });
  });
});
