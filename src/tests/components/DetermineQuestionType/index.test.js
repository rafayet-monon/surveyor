import React from 'react';

import { render, screen } from '@testing-library/react';

import 'tests/__mocks__/matchMedia';

import DetermineQuestionType from 'components/DetermineQuestionType';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import emojis from 'tests/components/DetermineQuestionType/emojis';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors';

describe('given DetermineQuestionType is mounted', () => {
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[0];

  describe("given the question has type 'heart'", () => {
    it('renders the Rating component', () => {
      question.type = emojis.heart.type;

      render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );
      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.heart.emoji);
    });
  });

  describe("given the question has type 'smiley'", () => {
    it('renders the Rating component', () => {
      question.type = emojis.smiley.type;

      render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.smiley.emoji);
    });
  });

  describe("given the question has type 'star'", () => {
    it('renders the Rating component', () => {
      question.type = emojis.star.type;

      render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.star.emoji);
    });
  });

  describe("given the question has type 'money'", () => {
    it('renders the Rating component', () => {
      question.type = emojis.money.type;

      render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.money.emoji);
    });
  });

  describe("given the question has type 'thumb'", () => {
    it('renders the Rating component', () => {
      question.type = emojis.thumb.type;

      render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.thumb.emoji);
    });
  });

  describe("given the question has type 'nps'", () => {
    it('renders the NetPromotingScore component', () => {
      question.type = 'nps';

      const { getByTestId } = render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );

      expect(getByTestId(questionSelectors.nps)).toBeInTheDocument();
    });
  });

  describe("given the question has type 'textarea'", () => {
    it('renders the SurveyTextAreaField component', () => {
      question.type = 'textarea';

      const { getByTestId } = render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <DetermineQuestionType question={ question } />
        </SurveyAnswerContext.Provider>
      );

      expect(getByTestId(questionSelectors.textArea)).toBeInTheDocument();
    });
  });

  describe("given the question has type 'textfield'", () => {
    it('renders the SurveyTextField component', () => {
      question.type = 'textfield';

      const { getByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={ details.data.id }>
            <DetermineQuestionType question={ question } />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      expect(getByTestId(questionSelectors.textField)).toBeInTheDocument();
    });
  });

  describe("given the question has type 'choice' and pick 'one'", () => {
    it('renders the WheelSelect component with single select options', () => {
      question.type = 'choice';
      const state = { survey_id: details.data.id, questions: [] };
      const dispatch = jest.fn();

      const { queryAllByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <DetermineQuestionType question={ question } />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      expect(queryAllByTestId(questionSelectors.wheelSelect)).not.toEqual([]);
      expect(queryAllByTestId(questionSelectors.wheelMultipleSelect)).toEqual(
        []
      );
    });
  });

  describe("given the question has type 'choice' and pick 'any'", () => {
    it('renders the WheelSelect component with multiple select options', () => {
      question.type = 'choice';
      question.pick = 'any';

      const { queryAllByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={ details.data.id }>
            <DetermineQuestionType question={ question } />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      expect(queryAllByTestId(questionSelectors.wheelSelect)).not.toEqual([]);
      expect(
        queryAllByTestId(questionSelectors.wheelMultipleSelect)
      ).not.toEqual([]);
    });
  });

  describe("given the question has type 'dropdown'", () => {
    it('renders the SurveySelectField component', () => {
      const state = { survey_id: details.data.id, questions: [] };
      const dispatch = jest.fn();
      question.type = 'dropdown';

      const { getByTestId } = render(
        <DetailsContext.Provider
          value={{
            surveyDetail: details,
            questionList
          }}
        >
          <SurveyAnswerContext.Provider value={{ state, dispatch }}>
            <DetermineQuestionType question={ question } />
          </SurveyAnswerContext.Provider>
        </DetailsContext.Provider>
      );

      expect(getByTestId(questionSelectors.dropdown)).toBeInTheDocument();
    });
  });
});
