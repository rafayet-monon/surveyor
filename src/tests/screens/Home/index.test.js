import React from 'react';

import { render } from '@testing-library/react';
import '__mocks__/matchMedia';
import mockAxios from 'axios';

import { AuthContext } from 'contexts/auth';
import logo from 'images/logo_white.png';
import Home from 'screens/Home';
import SurveyListResponse from 'tests/fixtures/surveyListResponse';

describe('When Home component is mounted', () => {
  const state = { isAuthenticated: true };
  const dispatch = null;

  it('renders the loader while fetching survey list', async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: SurveyListResponse, status: 400 })
    );

    const { getByLabelText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Home />
      </AuthContext.Provider>
    );

    const loadingHeaderClass = getByLabelText('loader-header');
    const loadingDetailsClass = getByLabelText('loader-details');

    expect(loadingHeaderClass).toBeInTheDocument();
    expect(loadingDetailsClass).toBeInTheDocument();
  });

  it('renders the details component after fetching survey list', async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: SurveyListResponse, status: 200 })
    );
    const { findByAltText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Home />
      </AuthContext.Provider>
    );

    const logoImage = await findByAltText('NIMBLE');

    expect(logoImage).toHaveAttribute('src', logo);
  });

  it('renders the blank slate if no survey list', async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { meta: { records: 0 } }, status: 200 })
    );
    const { findByText } = render(
      <AuthContext.Provider value={{ state, dispatch }}>
        <Home />
      </AuthContext.Provider>
    );

    const blankText = await findByText('You’ve completed all the survey.');

    expect(blankText).toBeInTheDocument();
  });
});
