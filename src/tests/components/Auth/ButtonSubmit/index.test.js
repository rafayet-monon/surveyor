import React from 'react';

import { render } from '@testing-library/react';

import FormButton from 'components/Auth/ButtonSubmit';

describe('When FormButton component is mounted', () => {
  const label = 'Log in';

  it('renders button with submit type', () => {
    const { getByTestId } = render(<FormButton label={ label } />);
    const formButton = expect(getByTestId('form-button-test'));

    formButton.toHaveAttribute('type', 'submit');
  });

  it('renders button with label', () => {
    const { getByTestId } = render(<FormButton label={ label } />);
    const formButton = expect(getByTestId('form-button-test'));

    formButton.toContainHTML(label);
  });
});
