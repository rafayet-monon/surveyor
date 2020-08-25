import React from 'react';
import { render } from '@testing-library/react';
import LogoWithLabel from '../../../components/LogoWithLabel';
import logo from '../../../images/logo_white.png';

describe('When LogoWithLabel component is mounted', () => {
  const label = 'Sign in to Nimble';

  it('renders button with submit type', () => {
    const { getByTestId } = render(<LogoWithLabel label={label} />);
    const logoImage = expect(getByTestId('logo-test'));

    logoImage.toHaveAttribute('src', logo);
  });

  it('renders button with label', () => {
    const { getByText } = render(<LogoWithLabel label={label} />);
    const labelText = getByText(label);

    expect(labelText).toBeInTheDocument();
  });
});
