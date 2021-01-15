import React from 'react';

import { render } from '@testing-library/react';

import BackButton from 'components/BackButton';
import backIcon from 'images/back-button-white.svg';

describe('When BackButton component is mounted', () => {
  it('renders back icon', () => {
    const { getByAltText } = render(<BackButton />);
    const backButton = getByAltText('back');

    expect(backButton).toHaveAttribute('src', backIcon);
  });
});
