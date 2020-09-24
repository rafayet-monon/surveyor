import React from 'react';

import { render } from '@testing-library/react';

import backgroundImage from 'images/auth_background.png';
import Login from 'screens/Login';

describe('When visited the Login Page', () => {
  const logoLabel = 'Sign in to Nimble';
  it('shows a background image', () => {
    const { getByLabelText } = render(<Login />);
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${backgroundImage})`);
  });

  it('shows a logo label', () => {
    const { getByText } = render(<Login />);
    const labelText = getByText(logoLabel);

    expect(labelText).toBeInTheDocument();
  });
});
