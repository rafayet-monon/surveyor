import React from 'react';

import { render, wait } from '@testing-library/react';



import Page from 'containers/Login/page';
import { AuthProvider } from 'contexts/auth';
import backgroundImage from 'images/auth_background.png';
import SubmitLoginForm from 'tests/shared_examples/submitLoginForm';

describe('When visited the Login Page', () => {
  const logoLabel = 'Sign in to Nimble';
  it('shows a background image', () => {
    const { getByLabelText } = render(
      <AuthProvider>
        <Page />
      </AuthProvider>
    );
    const imageDiv = getByLabelText('background-layout-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${backgroundImage})`);
  });

  it('shows a logo label', () => {
    const { getByText } = render(
      <AuthProvider>
        <Page />
      </AuthProvider>
    );
    const labelText = getByText(logoLabel);

    expect(labelText).toBeInTheDocument();
  });

  it('shows alert component if login credentials does not match', async () => {
    const mockEmail = 'mock@surveyor.com';
    const mockPass = 'mockpass';
    const loginError = 'Unable to login';
    const { container, findByText } = render(
      <AuthProvider>
        <Page />
      </AuthProvider>
    );
    SubmitLoginForm(mockEmail, mockPass, container);

    const errorTitle = await findByText(loginError);
    expect(errorTitle).toBeInTheDocument();
  });
});
