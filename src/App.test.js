import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app name SURVEYOR', () => {
  const { getByText } = render(<App />);
  const appName = getByText(/SURVEYOR_TEST/i);
  expect(appName).toBeInTheDocument();
});
