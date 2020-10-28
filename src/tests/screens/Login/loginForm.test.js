import React from 'react';

import { render, wait } from '@testing-library/react';

import { AuthProvider } from 'contexts/auth';
import LoginForm from 'screens/Login/loginForm';
import SubmitLoginForm from 'tests/shared_examples/submitLoginForm';

describe('When the Login Form is mounted', () => {
  it('shows email and password label', () => {
    const emailLabel = 'Email';
    const passwordLabel = 'Password';
    const { getByLabelText } = render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );
    const emailInputLabel = getByLabelText(emailLabel);
    const passInputLabel = getByLabelText(passwordLabel);

    expect(emailInputLabel).toBeInTheDocument();
    expect(passInputLabel).toBeInTheDocument();
  });

  it('shows email and password text box', () => {
    const emailType = 'email';
    const passwordType = 'password';
    const { getByRole } = render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );
    const emailInputType = getByRole('textbox', { type: emailType });
    const passInputType = getByRole('textbox', { type: passwordType });

    expect(emailInputType).toBeInTheDocument();
    expect(passInputType).toBeInTheDocument();
  });

  it('shows submit button', () => {
    const label = 'Sign in';
    const { getByRole, getByText } = render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );
    const formButton = getByRole('button', { type: 'submit' });
    const formLabel = getByText(label);

    expect(formButton).toBeInTheDocument();
    expect(formLabel).toBeInTheDocument();
  });

  describe('When the Login Form is submitted', () => {
    it('shows validation error if no email given', async () => {
      const mockEmail = '';
      const mockPass = 'mockpass';
      const emailRequired = 'Required';
      const { container, findByText } = render(
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      );

      SubmitLoginForm(mockEmail, mockPass, container);

      const errorTitle = await findByText(emailRequired);
      expect(errorTitle).toBeInTheDocument();
    });

    it('shows validation error if no password given', async () => {
      const mockEmail = 'mock@surveyor.com';
      const mockPass = '';
      const passwordRequired = 'Required';
      const { container, findByText } = render(
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      );

      SubmitLoginForm(mockEmail, mockPass, container);

      const errorTitle = await findByText(passwordRequired);
      expect(errorTitle).toBeInTheDocument();
    });

    test('submits Login with email and password', async () => {
      const handleSubmit = jest.fn();
      const mockEmail = 'mock@surveyor.com';
      const mockPass = '123123';
      const { container } = render(
        <AuthProvider>
          <LoginForm onSubmitHandler={ handleSubmit } />
        </AuthProvider>
      );
      SubmitLoginForm(mockEmail, mockPass, container);

      await wait(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
