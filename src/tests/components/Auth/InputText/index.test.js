import React from 'react';

import { render } from '@testing-library/react';

import TextInput from 'components/Auth/InputText';

describe('When TextInput component is mounted', () => {
  const labelFor = 'email';
  const label = 'Email';
  const inputId = 'email';
  const inputType = 'email';

  it('renders label with props', () => {
    const { getByTestId } = render(
      <TextInput
        labelFor={ labelFor }
        label={ label }
        inputId={ inputId }
        inputType={ inputType }
      />
    );
    const inputLabel = expect(getByTestId('input-label-test'));

    inputLabel.toHaveAttribute('for', labelFor);
    inputLabel.toContainHTML(label);
  });

  it('renders input with props', () => {
    const { getByTestId } = render(
      <TextInput
        labelFor={ labelFor }
        label={ label }
        inputId={ inputId }
        inputType={ inputType }
      />
    );
    const textInput = expect(getByTestId('text-input-test'));

    textInput.toHaveAttribute('type', inputType);
    textInput.toHaveAttribute('id', inputId);
  });

  it('renders forgot password link if inputType is password', () => {
    const passInputType = 'password';
    const { getByText } = render(
      <TextInput
        labelFor={ labelFor }
        label={ label }
        inputId={ inputId }
        inputType={ passInputType }
      />
    );
    const forgotPass = getByText(/Forgot/i);

    expect(forgotPass).toBeInTheDocument();
  });
});
