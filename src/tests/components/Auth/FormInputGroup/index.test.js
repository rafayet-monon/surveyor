import React from 'react';

import { render } from '@testing-library/react';

import FormInputGroup from 'components/Auth/FormInputGroup';

describe('When TextInput component is mounted', () => {
  const label = 'Email';
  const inputId = 'email';
  const inputType = 'email';

  it('renders label with props', () => {
    const { getByLabelText } = render(
      <FormInputGroup label={ label } inputId={ inputId } inputType={ inputType } />
    );
    const inputLabel = getByLabelText(label);

    expect(inputLabel).toBeInTheDocument();
  });

  it('renders input with props', () => {
    const { getByRole } = render(
      <FormInputGroup label={ label } inputId={ inputId } inputType={ inputType } />
    );
    const textInput = getByRole('textbox', { type: inputType, id: inputId });

    expect(textInput).toBeInTheDocument();
  });

  it('renders forgot password link if inputType is password', () => {
    const passInputType = 'password';
    const { getByText } = render(
      <FormInputGroup
        label={ label }
        inputId={ inputId }
        inputType={ passInputType }
        forgotPassLink={ true }
      />
    );
    const forgotPass = getByText(/Forgot/i);

    expect(forgotPass).toBeInTheDocument();
  });
});
