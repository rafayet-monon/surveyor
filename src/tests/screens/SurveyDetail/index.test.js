import React from 'react';

import { render } from '@testing-library/react';
import 'tests/__mocks__/matchMedia';
import mockAxios from 'axios';
import { Route, MemoryRouter } from 'react-router-dom';

import { AuthProvider } from 'contexts/auth';
import SurveyDetail from 'screens/SurveyDetail';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('When SurveyDetail component is mounted', () => {
  const initialMemoryRoutes = ['survey/1'];
  const routePath = 'survey/:surveyId';

  it('renders the loader while fetching survey detail', () => {
    const { getByLabelText } = render(
      <MemoryRouter initialEntries={ initialMemoryRoutes }>
        <Route path={ routePath }>
          <AuthProvider>
            <SurveyDetail />
          </AuthProvider>
        </Route>
      </MemoryRouter>
    );

    const loadingHeaderClass = getByLabelText('loader-header');
    const loadingDetailsClass = getByLabelText('loader-details');

    expect(loadingHeaderClass).toBeInTheDocument();
    expect(loadingDetailsClass).toBeInTheDocument();
  });

  it('shows survey image in PageBackground', async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: SurveyDetailResponse, status: 200 })
    );

    const { findByLabelText } = render(
      <MemoryRouter initialEntries={ initialMemoryRoutes }>
        <Route path={ routePath }>
          <AuthProvider>
            <SurveyDetail />
          </AuthProvider>
        </Route>
      </MemoryRouter>
    );

    const imageDiv = await findByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(
      `background-image: url(${SurveyDetailResponse.data.attributes.cover_image_url})`
    );
  });
});
