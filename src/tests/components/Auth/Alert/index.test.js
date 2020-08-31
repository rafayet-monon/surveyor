import React from 'react';

import { render } from '@testing-library/react';

import { Info, Error } from 'components/Auth/Alert';
import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

describe('When Info component is mounted', () => {
  const title = 'Info!';
  const description = 'Info Description';

  it('renders messages with information', () => {
    const { getByText, getByAltText } = render(
      <Info title={ title } description={ description } />
    );
    const logoImage = getByAltText('Info');
    const infoTitle = getByText(/Info!/);
    const infoDescription = getByText(/Info Description/);

    expect(infoTitle).toBeInTheDocument();
    expect(infoDescription).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', bellIcon);
  });
});

describe('When Error component is mounted', () => {
  const title = 'Error!';
  const description = 'Error Description';

  it('renders messages with errors', () => {
    const { getByText, getByAltText } = render(
      <Error title={ title } description={ description } />
    );
    const logoImage = getByAltText('Error');
    const errorTitle = getByText(/Error!/);
    const errorDescription = getByText(/Error Description/);

    expect(errorTitle).toBeInTheDocument();
    expect(errorDescription).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', errorIcon);
  });
});
