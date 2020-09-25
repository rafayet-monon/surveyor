import React from 'react';

import { render } from '@testing-library/react';
import LoginForm from 'screens/Login/form';

describe('When the Login Form is mounted', () => {
  it('shows email and password label', () => {
    const emailLabel = 'Email';
    const passwordLabel = 'Password';
    const { getByLabelText } = render(<LoginForm />);
    const emailInputLabel = getByLabelText(emailLabel);
    const passInputLabel = getByLabelText(passwordLabel);

    expect(emailInputLabel).toBeInTheDocument();
    expect(passInputLabel).toBeInTheDocument();
  });

  it('shows email and password text box', () => {
    const emailType = 'email';
    const passwordType = 'password';
    const { getByRole } = render(<LoginForm />);
    const emailInputType = getByRole('textbox', { type: emailType });
    const passInputType = getByRole('textbox', { type: passwordType });

    expect(emailInputType).toBeInTheDocument();
    expect(passInputType).toBeInTheDocument();
  });

  it('shows submit button', () => {
    const label = 'Sign in';
    const { getByRole, getByText } = render(<LoginForm />);
    const formButton = getByRole('button', { type: 'submit' });
    const formLabel = getByText(label);

    expect(formButton).toBeInTheDocument();
    expect(formLabel).toBeInTheDocument();
  });
});
