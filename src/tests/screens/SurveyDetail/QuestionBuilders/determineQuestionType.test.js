import React from 'react';

import { render } from '@testing-library/react';

import 'tests/__mocks__/matchMedia';
import DetermineQuestionType from 'screens/SurveyDetail/QuestionBuilders/determineQuestionType';

describe('given DetermineQuestionType is mounted', () => {
  describe("given the question has type 'heart'", () => {
    it('renders the Rating component', () => {
      const testId = 'rating-list'
      const type = 'heart'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'smiley'", () => {
    it('renders the Rating component', () => {
      const testId = 'rating-list'
      const type = 'smiley'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'star'", () => {
    it('renders the Rating component', () => {
      const testId = 'rating-list'
      const type = 'star'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'money'", () => {
    it('renders the Rating component', () => {
      const testId = 'rating-list'
      const type = 'money'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'thumb'", () => {
    it('renders the Rating component', () => {
      const testId = 'rating-list'
      const type = 'thumb'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'nps'", () => {
    it('renders the NetPromotingScore component', () => {
      const testId = 'np-score-numbers'
      const type = 'nps'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'textarea'", () => {
    it('renders the SurveyTextAreaField component', () => {
      const testId = 'survey-texarea'
      const type = 'textarea'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'textfield'", () => {
    it('renders the SurveyTextField component', () => {
      const testId = 'survey-textfield'
      const type = 'textfield'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })

  describe("given the question has type 'choice' and pick 'one'", () => {
    it('renders the WheelSelect component with single select options', () => {
      const displayTestId = 'select-display'
      const multipleSelectTestId = 'multiple-select'
      const type = 'choice'
      const pick = 'one'

      const { queryAllByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(queryAllByTestId(displayTestId)).not.toEqual([])
      expect(queryAllByTestId(multipleSelectTestId)).toEqual([])
    })
  })

  describe("given the question has type 'choice' and pick 'any'", () => {
    it('renders the WheelSelect component with multiple select options', () => {
      const displayTestId = 'select-display'
      const multipleSelectTestId = 'multiple-select'
      const type = 'choice'
      const pick = 'any'

      const { queryAllByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(queryAllByTestId(displayTestId)).not.toEqual([])
      expect(queryAllByTestId(multipleSelectTestId)).not.toEqual([])
    })
  })

  describe("given the question has type 'dropdown'", () => {
    it('renders the SurveySelectField component', () => {
      const testId = 'survey-dropdown'
      const type = 'dropdown'
      const pick = 'one'

      const { getByTestId } = render(
        <DetermineQuestionType type={ type } pick={ pick } />
      )

      expect(getByTestId(testId)).toBeInTheDocument();
    })
  })
})
