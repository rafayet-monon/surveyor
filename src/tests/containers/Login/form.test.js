import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../containers/Login/form';

describe('When visited the forgot password page', () => {
  it('renders page name Forgot Password', () => {
    const { queryByTestId } = render(<Form />);
    const formName = queryByTestId(/login-form-test/i);

    expect(formName).toBeTruthy();
  });
});
