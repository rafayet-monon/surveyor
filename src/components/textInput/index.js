import React from 'react';

const TextInput = ({ labelFor, label, inputType, inputId }) => {
  const isPassword = inputType === 'password';
  return (
    <div>
      <div className='text-input-wrapper'>
        <label htmlFor={labelFor} className='input-label'>
          {label}
        </label>
        <input
          type={inputType}
          id={inputId}
          className='form-control input-control'
        />
        {isPassword && (
          <a href='/' className='forgot-pass'>
            Forgot?
          </a>
        )}
      </div>
    </div>
  );
};

export default TextInput;
