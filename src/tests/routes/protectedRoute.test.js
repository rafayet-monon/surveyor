import React from 'react';
import { render } from '@testing-library/react';
import { AuthenticatedRoute } from 'routes/protectedRoute';
import Home from 'containers/Home';
import { AuthProvider } from 'contexts/auth';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

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
