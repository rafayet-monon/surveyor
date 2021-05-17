import React from 'react';

import { render } from '@testing-library/react';
import 'tests/__mocks__/matchMedia';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { DetailsContext } from 'contexts/details';
import { SurveyStatusProvider } from 'contexts/surveyStatus';
import Detail from 'screens/SurveyDetail/detail';
import buildQuestionList from 'screens/SurveyDetail/QuestionBuilders/buildQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('When Detail component is mounted', () => {
  const questionList = buildQuestionList(SurveyDetailResponse);

  it('shows the survey image', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={ history }>
        <DetailsContext.Provider
          value={{
            surveyDetail: SurveyDetailResponse,
            questionList
          }}
        >
          <SurveyStatusProvider>
            <Detail />
          </SurveyStatusProvider>
        </DetailsContext.Provider>
      </Router>
    );
    const surveyImage = container.querySelector(
      'img[class="survey-detail__image"]'
    );

    expect(surveyImage).not.toBe(null);
  });

  it('shows the survey title', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <DetailsContext.Provider
          value={{
            surveyDetail: SurveyDetailResponse,
            questionList
          }}
        >
          <SurveyStatusProvider>
            <Detail />
          </SurveyStatusProvider>
        </DetailsContext.Provider>
      </Router>
    );

    const surveyTtile = getByText(SurveyDetailResponse.data.attributes.title);

    expect(surveyTtile).toBeInTheDocument();
  });

  it('shows the survey introduction', () => {
    const history = createMemoryHistory();
    const introduction = questionList.find(
      (question) => question.type === 'intro'
    ).text;

    const { getByText } = render(
      <Router history={ history }>
        <DetailsContext.Provider
          value={{
            surveyDetail: SurveyDetailResponse,
            questionList
          }}
        >
          <SurveyStatusProvider>
            <Detail />
          </SurveyStatusProvider>
        </DetailsContext.Provider>
      </Router>
    );
    const surveyDescription = getByText(
      introduction.replace(/(\r\n|\n|\r)/gm, '')
    );

    expect(surveyDescription).toBeInTheDocument();
  });
});
