import React from 'react';
import { render } from '@testing-library/react';
import ForgotPassword from 'containers/ForgotPassword';

describe('When visited the forgot password page', () => {
  it('renders page name Forgot Password', () => {
    const { getByText } = render(<ForgotPassword />);
    const appName = getByText(/ForgotPassword/i);

    expect(appName).toBeInTheDocument();
  });
});
