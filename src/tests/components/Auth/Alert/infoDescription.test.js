import React from 'react';

import { render } from '@testing-library/react';

import InfoDescription from 'components/Auth/Alert/infoDescription';

describe('When InfoDescription component is mounted', () => {
  const description = 'Info Description';

  it('renders messages with information', () => {
    const { getByText } = render(<InfoDescription description={ description } />);
    const infoDescription = getByText(/Info Description/);

    expect(infoDescription).toBeInTheDocument();
  });
});
