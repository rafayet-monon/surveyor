import React from 'react';

import { render } from '@testing-library/react';

import Form from 'containers/ForgotPassword/form';

describe('When the forgot password form is mounted', () => {
  it('shows email label', () => {
    const emailLabel = 'Email';
    const { getByLabelText } = render(<Form />);
    const emailInputLabel = getByLabelText(emailLabel);

    expect(emailInputLabel).toBeInTheDocument();
  });

  it('shows email text box', () => {
    const emailType = 'email';
    const { getByRole } = render(<Form />);
    const emailInputType = getByRole('textbox', { type: emailType });

    expect(emailInputType).toBeInTheDocument();
  });

  it('shows submit button', () => {
    const label = 'Send Recovery Email';
    const { getByRole, getByText } = render(<Form />);
    const formButton = getByRole('button', { type: 'submit' });
    const formLabel = getByText(label);

    expect(formButton).toBeInTheDocument();
    expect(formLabel).toBeInTheDocument();
  });
});