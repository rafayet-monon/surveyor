import React from 'react';

import { render } from '@testing-library/react';

import Home from 'containers/Login';

describe('When visited the forgot password page', () => {
  it('renders page name Forgot Password', () => {
    const { getByText } = render(<Home />);
    const appName = getByText(/Login/i);

    expect(appName).toBeInTheDocument();
  });
});
