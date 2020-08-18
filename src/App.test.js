import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('When visited the Home Page', () => {
  it('renders app name SURVEYOR', () => {
    const { getByText } = render(<App />);
    const appName = getByText(/SURVEYOR/i);
    expect(appName).toBeInTheDocument();
  });
});
