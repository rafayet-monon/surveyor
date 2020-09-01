import React from 'react';

import { render } from '@testing-library/react';

import ErrorDescription from 'components/Auth/Alert/errorDescription';

describe('When ErrorDescription component is mounted', () => {
  const description = 'Error Description';

  it('renders messages with information', () => {
    const { getByText } = render(
      <ErrorDescription description={ description } />
    );
    const infoDescription = getByText(/Error Description/);

    expect(infoDescription).toBeInTheDocument();
  });
});
