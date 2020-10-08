import React from 'react';

import { render } from '@testing-library/react';

import backgroundImage from 'images/auth_background.png';
import ForgotPassword from 'screens/ForgotPassword';

describe('When visited the Login Page', () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';
  it('shows a background image', () => {
    const { getByLabelText } = render(<ForgotPassword />);
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${backgroundImage})`);
  });

  it('shows a logo label', () => {
    const { getByText } = render(<ForgotPassword />);
    const labelText = getByText(logoLabel);

    expect(labelText).toBeInTheDocument();
  });
});
