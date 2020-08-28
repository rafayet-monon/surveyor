import React from 'react';

import { render } from '@testing-library/react';

import BackgroundLayout from 'components/BackgroundLayout';
import backgroundImage from 'images/auth_background.png';

describe('When BackgroundLayout component is mounted', () => {
  it('shows image in background', () => {
    const { getByTestId } = render(
      <BackgroundLayout backgroundImage={ backgroundImage } />
    );
    const imageDiv = expect(getByTestId('background-image-test'));

    imageDiv.toHaveStyle(`background-image: url(${backgroundImage}), #000`);
  });

  it('renders child component', () => {
    const { getByText } = render(
      <BackgroundLayout backgroundImage={ backgroundImage }>
        <p>Child Component</p>
      </BackgroundLayout>
    );
    const childText = getByText(/Child Component/i);

    expect(childText).toBeInTheDocument();
  });
});
