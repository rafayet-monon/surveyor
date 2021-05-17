import React from 'react';

import { render, screen } from '@testing-library/react';

import 'tests/__mocks__/matchMedia';
import DetermineQuestionType from 'screens/SurveyDetail/QuestionBuilders/determineQuestionType';
import emojis from 'tests/screens/SurveyDetail/QuestionBuilders/emojis'
import { questionSelectors } from 'tests/screens/SurveyDetail/selectors'

describe('given DetermineQuestionType is mounted', () => {
  describe("given the question has type 'heart'", () => {
    it('renders the Rating component', () => {
      const pick = 'one'

      render(
        <DetermineQuestionType type={ emojis.heart.type } pick={ pick } />
      )
      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.heart.emoji);
    })
  })

  describe("given the question has type 'smiley'", () => {
    it('renders the Rating component', () => {
      const pick = 'one'

      render(
        <DetermineQuestionType type={ emojis.smiley.type } pick={ pick } />
      )

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.smiley.emoji);
    })
  })

  describe("given the question has type 'star'", () => {
    it('renders the Rating component', () => {
      const pick = 'one'

      render(
        <DetermineQuestionType type={ emojis.star.type } pick={ pick } />
      )

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.star.emoji);
    })
  })

  describe("given the question has type 'money'", () => {
    it('renders the Rating component', () => {
      const pick = 'one'

      render(
        <DetermineQuestionType type={ emojis.money.type } pick={ pick } />
      )

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.money.emoji);
    })
  })

  describe("given the question has type 'thumb'", () => {
    it('renders the Rating component', () => {
      const pick = 'one'

      render(
        <DetermineQuestionType type={ emojis.thumb.type } pick={ pick } />
      )

      const ratingContent = screen.getByTestId(questionSelectors.rating);
      expect(ratingContent).toBeInTheDocument();
      expect(ratingContent).toHaveTextContent(emojis.thumb.emoji);
    })
  })

  describe("given the question has type 'nps'", () => {
    it('renders the NetPromotingScore component', () => {
      const type = 'nps'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(questionSelectors.nps)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'textarea'", () => {
    it('renders the SurveyTextAreaField component', () => {
      const type = 'textarea'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(questionSelectors.textArea)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'textfield'", () => {
    it('renders the SurveyTextField component', () => {
      const type = 'textfield'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(questionSelectors.textField)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'choice' and pick 'one'", () => {
    it('renders the WheelSelect component with single select options', () => {
      const type = 'choice'
      const pick = 'one'

      const { queryAllByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(queryAllByTestId(questionSelectors.wheelSelect)).not.toEqual([])
      expect(queryAllByTestId(questionSelectors.wheelMultipleSelect)).toEqual([])
    })
  })

  describe("given the question has type 'choice' and pick 'any'", () => {
    it('renders the WheelSelect component with multiple select options', () => {
      const type = 'choice'
      const pick = 'any'

      const { queryAllByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(queryAllByTestId(questionSelectors.wheelSelect)).not.toEqual([])
      expect(queryAllByTestId(questionSelectors.wheelMultipleSelect)).not.toEqual([])
    })
  })

  describe("given the question has type 'dropdown'", () => {
    it('renders the SurveySelectField component', () => {
      const type = 'dropdown'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(questionSelectors.dropdown)).toBeInTheDocument();
    })
  })
})
