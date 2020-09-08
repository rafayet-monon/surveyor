import React from 'react';

import { render } from '@testing-library/react';

import Alert from 'components/Auth/Alert';
import bellIcon from 'images/icons/bell_icon.png';
import errorIcon from 'images/icons/error_icon.png';

describe('When Alert component is mounted without type', () => {
  const title = 'Info!';
  const description = 'Info Description';

  it('renders messages with information', () => {
    const { getByText, getByAltText } = render(
      <Alert title={ title } description={ description } />
    );
    const logoImage = getByAltText('info');
    const infoTitle = getByText(/Info!/);
    const infoDescription = getByText(/Info Description/);

    expect(infoTitle).toBeInTheDocument();
    expect(infoDescription).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', bellIcon);
  });
});

describe('When Alert component is mounted with error type', () => {
  const title = 'Error!';
  const description = 'Error Description';

  it('renders messages with errors', () => {
    const { getByText, getByAltText } = render(
      <Alert title={ title } description={ description } alertType="error" />
    );
    const logoImage = getByAltText('error');
    const errorTitle = getByText(/Error!/);
    const errorDescription = getByText(/Error Description/);

    expect(errorTitle).toBeInTheDocument();
    expect(errorDescription).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', errorIcon);
  });
});
