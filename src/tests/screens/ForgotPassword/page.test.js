import React from 'react';

import { render } from '@testing-library/react';

import backgroundImage from 'images/auth_background.png';
import Page from 'screens/ForgotPassword/page';

describe('When visited the Login Page', () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';
  it('shows a background image', () => {
    const { getByLabelText } = render(<Page />);
    const imageDiv = getByLabelText('background-layout-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${backgroundImage})`);
  });

  it('shows a logo label', () => {
    const { getByText } = render(<Page />);
    const labelText = getByText(logoLabel);

    expect(labelText).toBeInTheDocument();
  });
});
