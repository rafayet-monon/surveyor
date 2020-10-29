import React from 'react';

import { render } from '@testing-library/react';

import Details from 'screens/Home/details';

describe('When Details component is mounted', () => {
  it('shows the current date', () => {
    const date = new Date();
    const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = date.toLocaleString('en-EN', date_options).toUpperCase();

    const { getByText } = render(<Details />);
    const today_date = getByText(today);
    const today_message = getByText('Today');

    expect(today_date).toBeInTheDocument();
    expect(today_message).toBeInTheDocument();
  });
});
