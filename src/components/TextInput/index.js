import React from 'react';

const TextInput = ({ labelFor, label, inputType, inputId }) => {
  const isPassword = inputType === 'password';
  return (
    <div>
      <div className='text-input-wrapper'>
        <label
          htmlFor={labelFor}
          className='input-label'
          data-testid='input-label-test'
        >
          {label}
        </label>
        <input
          type={inputType}
          id={inputId}
          className='form-control input-control'
          data-testid='text-input-test'
        />
        {isPassword && (
          <a href='/' className='forgot-pass' data-testid='forgot-link-test'>
            Forgot?
          </a>
        )}
      </div>
    </div>
  );
};

export default TextInput;
