import React from 'react';

import { render } from '@testing-library/react';
import mockAxios from 'axios';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import '__mocks__/matchMedia';
import { AuthContext, AuthProvider } from 'contexts/auth';
import {
  AuthenticatedRoute,
  UnauthenticatedRoute
} from 'routes/protectedRoute';
import Home from 'screens/Home';
import Login from 'screens/Login';
import SurveyListResponse from 'tests/fixtures/surveyListResponse';

describe('when AuthenticaedRoute component is mounted', () => {
  it('returns to login page if not authorized', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <AuthProvider>
          <AuthenticatedRoute path="/" exact component={ Home } />
        </AuthProvider>
      </Router>
    );

    expect(history.location.pathname).toBe('/login');
  });

  it('returns to the desired authenticated route if authorized', () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: SurveyListResponse })
    );

    const history = createMemoryHistory();
    const state = { isAuthenticated: true };
    const dispatch = null;
    render(
      <Router history={ history }>
        <AuthContext.Provider value={{ state, dispatch }}>
          <AuthenticatedRoute path="/" exact component={ Home } />
        </AuthContext.Provider>
      </Router>
    );

    expect(history.location.pathname).toBe('/');
  });

  it('returns to the home page if authorized and tries to visit unauthenticated route', () => {
    const history = createMemoryHistory();
    const state = { isAuthenticated: true };
    const dispatch = null;
    render(
      <Router history={ history }>
        <AuthContext.Provider value={{ state, dispatch }}>
          <UnauthenticatedRoute path="/login" exact component={ Login } />
        </AuthContext.Provider>
      </Router>
    );

    expect(history.location.pathname).toBe('/');
  });
});
