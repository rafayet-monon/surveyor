import React from 'react';

import { render } from '@testing-library/react';

import '__mocks__/matchMedia';
import { AuthContext } from 'contexts/auth';
import { BackgroundProvider } from 'contexts/background';
import userImage from 'images/user-placeholder.jpg';
import Details from 'screens/Home/details';
import SurveyListResponse from 'tests/fixtures/surveyListResponse';

describe('When Details component is mounted', () => {
  const state = { isAuthenticated: true };
  const dispatch = null;

  it('shows the current date', () => {
    const date = new Date();
    const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = date.toLocaleString('en-EN', date_options).toUpperCase();

    const { getByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <BackgroundProvider>
          <Details surveyResponse={ SurveyListResponse } />
        </BackgroundProvider>
      </AuthContext.Provider>
    );
    const today_date = getByText(today);
    const today_message = getByText('Today');

    expect(today_date).toBeInTheDocument();
    expect(today_message).toBeInTheDocument();
  });

  it('renders the user image of sidebar', () => {
    const { getByAltText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <BackgroundProvider>
          <Details surveyResponse={ SurveyListResponse } />
        </BackgroundProvider>
      </AuthContext.Provider>
    );
    const user = getByAltText('USER');

    expect(user).toHaveAttribute('src', userImage);
  });
});
