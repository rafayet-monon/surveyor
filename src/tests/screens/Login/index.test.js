import React from 'react';

import { render, wait } from '@testing-library/react';
import mockAxios from 'axios';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { AuthContext, AuthProvider } from 'contexts/auth';
import backgroundImage from 'images/auth_background.png';
import Login from 'screens/Login';
import SubmitLoginForm from 'tests/shared_examples/submitLoginForm';

describe('When visited the Login Page', () => {
  const logoLabel = 'Sign in to Nimble';
  it('shows a background image', () => {
    const { getByLabelText } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${backgroundImage})`);
  });

  it('shows a logo label', () => {
    const { getByText } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const labelText = getByText(logoLabel);

    expect(labelText).toBeInTheDocument();
  });

  it('shows alert component if login credentials does not match', async () => {
    mockAxios.post.mockImplementation(() =>
      Promise.reject({ response: { status: 400, data: {} } })
    );
    const mockEmail = 'mock@surveyor.com';
    const mockPass = 'mockpass';
    const loginError = 'Unable to login';
    const { container, findByText } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    SubmitLoginForm(mockEmail, mockPass, container);

    const errorTitle = await findByText(loginError);
    expect(errorTitle).toBeInTheDocument();
  });

  it('redirects if valid email and password given', async () => {
    mockAxios.post.mockImplementation(() =>
      Promise.resolve({ status: 200, data: {} })
    );
    const history = createMemoryHistory();
    const state = { isAuthenticated: true };
    const dispatch = null;

    const validEmail = process.env.REACT_APP_VALID_EMAIL;
    const validPass = process.env.REACT_APP_VALID_PASSWORD;
    const loginError = 'Unable to login';

    const { container, queryByText } = render(
      <Router history={ history }>
        <AuthContext.Provider value={{ state, dispatch }}>
          <Login />
        </AuthContext.Provider>
      </Router>
    );
    await wait(() => {
      SubmitLoginForm(validEmail, validPass, container);
    });

    const errorTitle = queryByText(loginError);
    expect(errorTitle).not.toBeInTheDocument();
  });
});
