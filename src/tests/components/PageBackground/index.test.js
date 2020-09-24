import React from 'react';

import { render } from '@testing-library/react';

import PageBackground from 'components/PageBackground';
import defaultBackgroundImage from 'images/auth_background.png';
import testBackgroundImage from 'tests/fixtures/images/test-background.jpeg'

describe('When PageBackground component is mounted', () => {
  it('shows default image in background', () => {
    const { getByLabelText } = render(
      <PageBackground />
    );
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${defaultBackgroundImage})`);
  });

  it('shows no image in background if null is provided in dynamicImage', () => {
    const { getByLabelText } = render(
      <PageBackground dynamicImage={ null } />
    );
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${null})`);
  });

  it('shows provided image in background if provided in dynamicImage', () => {
    const { getByLabelText } = render(
      <PageBackground dynamicImage={ testBackgroundImage } />
    );
    const imageDiv = getByLabelText('page-background-image');

    expect(imageDiv).toHaveStyle(`background-image: url(${testBackgroundImage})`);
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
