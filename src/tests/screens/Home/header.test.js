import React from 'react';

import { render } from '@testing-library/react';

import logo from 'images/logo_white.png';
import userImage from 'images/user-placeholder.jpg';
import Header from 'screens/Home/header';

describe('When Header component is mounted', () => {
  it('renders the logo', () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText('NIMBLE');

    expect(logoImage).toHaveAttribute('src', logo);
  });

  it('shows user avatar', async () => {
    const { findByAltText } = render(<Header avatar={ userImage } />);
    const navImage = await findByAltText('USER');

    expect(navImage).toHaveAttribute('src', userImage);
  });
});
