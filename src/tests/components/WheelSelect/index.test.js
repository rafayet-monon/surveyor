import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import 'tests/__mocks__/matchMedia';
import WheelSelect from 'components/WheelSelect';
import * as Constants from 'constants/surveyAnswer';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors';

describe('WheelSelect', () => {
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[6];
  const state = { survey_id: details.data.id, questions: [] };

  describe('given multiple select to the component', () => {
    it('shows dropdown with checkbox', () => {
      const dispatch = jest.fn();

      const { getAllByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <WheelSelect
              multipleSelect={ true }
              answers={ question.answers }
              questionId={ question.id }
            />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      const dropdowns = getAllByTestId(questionSelectors.wheelMultipleSelect);
      expect(dropdowns).toHaveLength(7);
    });

    describe('given a checkbox is checked', () => {
      it('calls dispatch with checked answer', () => {
        const dispatch = jest.fn();

        const { getByTestId } = render(
          <DetailsContext.Provider
            value={{
              surveyDetail: details,
              questionList
            }}
          >
            <SurveyAnswerContext.Provider value={{ state, dispatch }}>
              <WheelSelect
                multipleSelect={ true }
                answers={ question.answers }
                questionId={ question.id }
              />
            </SurveyAnswerContext.Provider>
          </DetailsContext.Provider>
        );

        const dropdownIndex = 1;
        const dropdownContent = getByTestId(`checkbox-${dropdownIndex}`);

        fireEvent.click(dropdownContent);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: Constants.MULTIPLE_ANSWER,
          data: QuestionObjectBuilder(
            question.id,
            question.answers[dropdownIndex].id
          )
        });
      });
    });

    describe('given a checkbox is unchecked', () => {
      it('calls dispatch with unchecked answer', () => {
        const dispatch = jest.fn();

        const { getByTestId } = render(
          <DetailsContext.Provider
            value={{
              surveyDetail: details,
              questionList
            }}
          >
            <SurveyAnswerContext.Provider value={{ state, dispatch }}>
              <WheelSelect
                multipleSelect={ true }
                answers={ question.answers }
                questionId={ question.id }
              />
            </SurveyAnswerContext.Provider>
          </DetailsContext.Provider>
        );

        const dropdownIndex = 1;
        const dropdownContent = getByTestId(`checkbox-${dropdownIndex}`);

        fireEvent.click(dropdownContent);
        fireEvent.click(dropdownContent);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
          type: Constants.MULTIPLE_ANSWER,
          data: QuestionObjectBuilder(
            question.id,
            question.answers[dropdownIndex].id
          )
        });
      });
    });
  });

  describe('given single select to the component', () => {
    it('shows only the dropdown', () => {
      const dispatch = jest.fn();

      const { getAllByTestId, queryAllByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <WheelSelect answers={ question.answers } questionId={ question.id } />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      const dropdowns = getAllByTestId(questionSelectors.wheelSelect);
      expect(queryAllByTestId(questionSelectors.wheelMultipleSelect)).toEqual(
        []
      );
      expect(dropdowns).toHaveLength(7);
    });

    it('the first option is selected by default', () => {
      const dispatch = jest.fn();

      render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <WheelSelect answers={ question.answers } questionId={ question.id } />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );
      const dropdownIndex = 0;

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(
          question.id,
          question.answers[dropdownIndex].id
        )
      });
    });
  });
});
