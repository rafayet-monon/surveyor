import React from 'react';

import { render } from '@testing-library/react';

import { Info, Error } from 'components/Auth/Alert';
import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

describe('When Info component is mounted', () => {
  const title = 'Info';
  const description = 'Info Description';

  it('renders button with submit type', () => {
    const { getByTestId } = render(
      <Info title={ title } description={ description } />
    );
    const logoImage = expect(getByTestId('info-icon-test'));
    const infoTitle = expect(getByTestId('info-title-test'));
    const infoDescription = expect(getByTestId('info-description-test'));

    infoTitle.toContainHTML(title);
    infoDescription.toContainHTML(description);
    logoImage.toHaveAttribute('src', bellIcon);
  });
});

describe('When Error component is mounted', () => {
  const title = 'Error';
  const description = 'Error Description';

  it('renders button with submit type', () => {
    const { getByTestId } = render(
      <Error title={ title } description={ description } />
    );
    const logoImage = expect(getByTestId('error-icon-test'));
    const infoTitle = expect(getByTestId('error-title-test'));
    const infoDescription = expect(getByTestId('error-description-test'));

    infoTitle.toContainHTML(title);
    infoDescription.toContainHTML(description);
    logoImage.toHaveAttribute('src', errorIcon);
  });
});
