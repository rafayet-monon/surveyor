import React from 'react';

import { render } from '@testing-library/react';

import TextInput from 'components/Auth/InputText';

describe('When TextInput component is mounted', () => {
  const labelFor = 'email';
  const label = 'Email';
  const inputId = 'email';
  const inputType = 'email';

  it('renders label with props', () => {
    const { getByLabelText } = render(
      <TextInput
        labelFor={ labelFor }
        label={ label }
        inputId={ inputId }
        inputType={ inputType }
      />
    );
    const inputLabel = getByLabelText(label);

    expect(inputLabel).toBeInTheDocument();
  });

  it('renders input with props', () => {
    const { getByRole } = render(
      <TextInput
        labelFor={ labelFor }
        label={ label }
        inputId={ inputId }
        inputType={ inputType }
      />
    );
    const textInput = getByRole('textbox', { type: inputType, id: inputId });

    expect(textInput).toBeInTheDocument();
  });

  it('renders forgot password link if inputType is password', () => {
    const passInputType = 'password';
    const { getByText } = render(
      <TextInput
        labelFor={ labelFor }
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
