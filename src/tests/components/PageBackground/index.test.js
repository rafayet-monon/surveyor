import React from 'react';

import { render } from '@testing-library/react';

import PageBackground from 'components/PageBackground';
import defaultBackgroundImage from 'images/auth_background.png';
import testBackgroundImage from 'tests/fixtures/images/test-background.jpeg';

describe('When PageBackground component is mounted', () => {
  it('shows default image in background', () => {
    const { getByLabelText } = render(<PageBackground type="default" />);
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(
      `background-image: url(${defaultBackgroundImage})`
    );
  });

  it('shows no image in background if no type is provided', () => {
    const { getByLabelText } = render(<PageBackground />);
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${null})`);
  });

  it('shows provided image in background if provided image in type and provided imagePath', () => {
    const { getByLabelText } = render(
      <PageBackground type="image" imagePath={ testBackgroundImage } />
    );
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(
      `background-image: url(${testBackgroundImage})`
    );
  });

  it('renders child component', () => {
    const { getByText } = render(
      <PageBackground>
        <p>Child Component</p>
      </PageBackground>
    );
    const childText = getByText(/Child Component/i);

    expect(childText).toBeInTheDocument();
  });
});
