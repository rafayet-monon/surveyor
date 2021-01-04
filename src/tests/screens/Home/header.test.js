import React from 'react';

import { render } from '@testing-library/react';

import logo from 'images/logo_white.png';
import Header from 'screens/Home/header';

describe('When Header component is mounted', () => {
  it('renders the logo', () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText('NIMBLE');

    expect(logoImage).toHaveAttribute('src', logo);
  });
});
