import React from 'react';

import { render } from '@testing-library/react';
import '__mocks__/matchMedia';
import mockAxios from 'axios';

import { AuthContext } from 'contexts/auth';
import { BackgroundProvider } from 'contexts/background';
import Details from 'screens/Home/details';
import ProfileResponse from 'tests/fixtures/profileResponse.json';
import SurveyListResponse from 'tests/fixtures/surveyListResponse';

describe('When Details component is mounted', () => {
  const state = { isAuthenticated: true };
  const dispatch = null;

  mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: ProfileResponse, status: 200 })
  );

  it('shows the current date', async () => {
    const date = new Date();
    const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = date.toLocaleString('en-EN', date_options).toUpperCase();

    const { findByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <BackgroundProvider>
          <Details surveyResponse={ SurveyListResponse } />
        </BackgroundProvider>
      </AuthContext.Provider>
    );
    const today_date = await findByText(today);
    const today_message = await findByText('Today');

    expect(today_date).toBeInTheDocument();
    expect(today_message).toBeInTheDocument();
  });
});
