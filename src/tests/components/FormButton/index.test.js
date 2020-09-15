import React from 'react';

import { render } from '@testing-library/react';

import FormButton from 'components/FormButton';

describe('When FormButton component is mounted', () => {
  const label = 'Log in';

  it('renders button with submit type', () => {
    const { getByRole } = render(<FormButton label={ label } />);
    const formButton = getByRole('button', { type: 'submit' });

    expect(formButton).toBeInTheDocument();
  });

  it('renders button with label', () => {
    const { getByText } = render(<FormButton label={ label } />);
    const formButton = getByText(label);

    expect(formButton).toBeInTheDocument();
  });
});
