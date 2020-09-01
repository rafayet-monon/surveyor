import React from 'react';

import { render } from '@testing-library/react';

import Page from 'containers/ForgotPassword/page';
import backgroundImage from 'images/auth_background.png';

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