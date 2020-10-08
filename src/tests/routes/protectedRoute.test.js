import React from 'react';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { AuthProvider } from 'contexts/auth';
import { AuthenticatedRoute } from 'routes/protectedRoute';
import Home from 'screens/Home';

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
});

test.todo('Test authorized route after authentication functionality');
