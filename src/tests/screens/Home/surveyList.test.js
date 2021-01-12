import React from 'react';

import { render } from '@testing-library/react';

import 'tests/mocks/matchMedia';
import { BackgroundProvider } from 'contexts/background';
import SurveyList from 'screens/Home/surveyList';
import SurveyListResponse from 'tests/fixtures/surveyListResponse';

describe('When SurveyList component is mounted', () => {
  const response = SurveyListResponse;
  const attributes = response.data[0].attributes;

  it('renders the survey image', () => {
    const { getByAltText } = render(
      <BackgroundProvider>
        <SurveyList surveyResponse={ response } />
      </BackgroundProvider>
    );
    const surveyImage = getByAltText(attributes.title);

    expect(surveyImage).toHaveAttribute('src', attributes.cover_image_url);
  });

  it('renders the survey title', () => {
    const { getByText } = render(
      <BackgroundProvider>
        <SurveyList surveyResponse={ response } />
      </BackgroundProvider>
    );
    const title = getByText(attributes.title);

    expect(title).toBeInTheDocument();
  });

  it('renders the survey description', () => {
    const { getByText } = render(
      <BackgroundProvider>
        <SurveyList surveyResponse={ response } />
      </BackgroundProvider>
    );
    const description = getByText(attributes.description);

    expect(description).toBeInTheDocument();
  });
});
