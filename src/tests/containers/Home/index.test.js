import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../containers/Home';

describe('When visited the forgot password page', () => {
  it('renders page name Forgot Password', () => {
    const { getByText } = render(<Home />);
    const appName = getByText(/Home/i);

    expect(appName).toBeInTheDocument();
  });
});
