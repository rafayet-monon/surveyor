import React from 'react';
import { render } from '@testing-library/react';
import { AuthenticaedRoute } from '../../routes/protectedRoute';
import Home from '../../containers/Home';
import { AuthProvider } from '../../contexts/authContext';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('When AuthenticaedRoute component is mounted', () => {
  it('returns to login page if not authorized', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <AuthProvider>
          <AuthenticaedRoute path='/' exact component={Home} />
        </AuthProvider>
      </Router>
    );

    expect(history.location.pathname).toBe('/login');
  });
});

test.todo('Test authorized route');
