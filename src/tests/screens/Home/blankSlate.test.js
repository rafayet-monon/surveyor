import React from 'react';

import { render } from '@testing-library/react';

import BlankSlate from 'screens/Home/blankSlate';

describe('When Header component is mounted', () => {
  it('renders the logo', () => {
    const { getByText } = render(<BlankSlate />);
    const emoji = getByText('😎');
    const survey_completed = getByText('You’ve completed all the survey.');
    const rest_message = getByText('Take a moment.');

    expect(emoji).toBeInTheDocument();
    expect(survey_completed).toBeInTheDocument();
    expect(rest_message).toBeInTheDocument();
  });
});
