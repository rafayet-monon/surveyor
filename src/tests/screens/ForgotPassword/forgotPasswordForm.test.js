import React from 'react';

import { render, wait } from '@testing-library/react';

import { AuthProvider } from 'contexts/auth';
import ForgotPasswordForm from 'screens/ForgotPassword/forgotPasswordForm';
import SubmitForgotPasswordForm from 'tests/shared_examples/submitForgotPasswordForm';

describe('When the forgot password form is mounted', () => {
  it('shows email label', () => {
    const emailLabel = 'Email';
    const { getByLabelText } = render(<ForgotPasswordForm />);
    const emailInputLabel = getByLabelText(emailLabel);

    expect(emailInputLabel).toBeInTheDocument();
  });

  it('shows email text box', () => {
    const emailType = 'email';
    const { getByRole } = render(<ForgotPasswordForm />);
    const emailInputType = getByRole('textbox', { type: emailType });

    expect(emailInputType).toBeInTheDocument();
  });

  it('shows submit button', () => {
    const label = 'Send Recovery Email';
    const { getByRole, getByText } = render(<ForgotPasswordForm />);
    const formButton = getByRole('button', { type: 'submit' });
    const formLabel = getByText(label);

    expect(formButton).toBeInTheDocument();
    expect(formLabel).toBeInTheDocument();
  });

  describe('When the forgot password form is submitted', () => {
    describe('given an empty email', () => {
      it('shows required validation error', async () => {
        const mockEmail = '';
        const emailRequired = 'Required';
        const { container, findByText } = render(
          <AuthProvider>
            <ForgotPasswordForm />
          </AuthProvider>
        );

        SubmitForgotPasswordForm(mockEmail, container);

        const errorTitle = await findByText(emailRequired);
        expect(errorTitle).toBeInTheDocument();
      });
    });

    describe('given an invalid email', () => {
      it('shows invalid email validation error', async () => {
        const mockEmail = 'email@invalid';
        const emailInvalid = 'Invalid email address';
        const { container, findByText } = render(
          <AuthProvider>
            <ForgotPasswordForm />
          </AuthProvider>
        );

        SubmitForgotPasswordForm(mockEmail, container);

        const errorTitle = await findByText(emailInvalid);
        expect(errorTitle).toBeInTheDocument();
      });
    });

    describe('given a valid email', () => {
      it('submits the form successfully', async () => {
        const handleSubmit = jest.fn();
        const mockEmail = 'mock@surveyor.com';
        const { container } = render(
          <AuthProvider>
            <ForgotPasswordForm onSubmitHandler={ handleSubmit } />
          </AuthProvider>
        );
        SubmitForgotPasswordForm(mockEmail, container);

        await wait(() => {
          expect(handleSubmit).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
