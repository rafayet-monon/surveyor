import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Rating from 'components/Rating';
import * as Constants from 'constants/surveyAnswer';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors';

describe('Rating', () => {
  const emojiName = 'star';
  const emoji = '⭐';
  const maxRating = 5;
  const details = SurveyDetailResponse;
  const questionList = buildQuestionList(SurveyDetailResponse);
  const filteredQuestions = filterQuestionList(questionList);
  const question = filteredQuestions[0];

  describe('given an emoji to the component', () => {
    it('shows the emoji', () => {
      render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <Rating
            ratingEmoji={ emojiName }
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toHaveTextContent(emoji);
    });
  });

  describe('given a max rating number', () => {
    it('shows the emoji according to the number', () => {
      const { getAllByText } = render(
        <SurveyAnswerContext.Provider value={ details.data.id }>
          <Rating
            ratingEmoji={ emojiName }
            answers={ question.answers }
            questionId={ question.id }
            maxRating={ maxRating }
          />
        </SurveyAnswerContext.Provider>
      );

      const emojiNumber = getAllByText(emoji);
      expect(emojiNumber).toHaveLength(maxRating);
    });
  });

  describe('given an emoji is clicked', () => {
    it('calls dispatch with selected answer', () => {
      const state = { survey_id: details.data.id, questions: [] };
      const dispatch = jest.fn();

      const { getAllByText } = render(
        <SurveyAnswerContext.Provider value={{ state, dispatch }}>
          <Rating
            ratingEmoji={ emojiName }
            answers={ question.answers }
            questionId={ question.id }
          />
        </SurveyAnswerContext.Provider>
      );

      // fireEvent
      const ratings = getAllByText(emoji);
      fireEvent.click(ratings[1]);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(question.id, question.answers[1].id)
      });
    });
  });

  it("adds the class 'rating__emoji--selected' to the emoji", () => {
    const state = { survey_id: details.data.id, questions: [] };
    const dispatch = jest.fn();

    const { getAllByText } = render(
      <SurveyAnswerContext.Provider value={{ state, dispatch }}>
        <Rating
          ratingEmoji={ emojiName }
          answers={ question.answers }
          questionId={ question.id }
        />
      </SurveyAnswerContext.Provider>
    );

    // fireEvent
    const ratings = getAllByText(emoji);
    fireEvent.click(ratings[1]);

    expect(ratings[1].className.includes('rating__emoji--selected')).toBe(true);
  });

  it("adds the class 'rating__emoji--selected' to all the previous emojis", () => {
    const state = { survey_id: details.data.id, questions: [] };
    const dispatch = jest.fn();

    const { getAllByText } = render(
      <SurveyAnswerContext.Provider value={{ state, dispatch }}>
        <Rating
          ratingEmoji={ emojiName }
          answers={ question.answers }
          questionId={ question.id }
        />
      </SurveyAnswerContext.Provider>
    );

    const ratings = getAllByText(emoji);
    fireEvent.click(ratings[1]);

    expect(ratings[0].className.includes('rating__emoji--selected')).toBe(true);
  });

  it("does not add the class 'rating__emoji--selected' to the next emojis", () => {
    const state = { survey_id: details.data.id, questions: [] };
    const dispatch = jest.fn();

    const { getAllByText } = render(
      <SurveyAnswerContext.Provider value={{ state, dispatch }}>
        <Rating
          ratingEmoji={ emojiName }
          answers={ question.answers }
          questionId={ question.id }
        />
      </SurveyAnswerContext.Provider>
    );

    // fireEvent
    const ratings = getAllByText(emoji);
    fireEvent.click(ratings[3]);

    expect(ratings[4].className.includes('rating__emoji--selected')).toBe(
      false
    );
  });
});
