import React from 'react';

const InputText = ({ labelFor, label, inputType, inputId }) => {
  const isPassword = inputType === 'password';
  return (
    <div className="input-text">
      <label
        htmlFor={ labelFor }
        className="input-text__label"
        data-testid="input-label-test"
      >
        { label }
      </label>
      <input
        type={ inputType }
        id={ inputId }
        className="form-control input-text__box"
        data-testid="text-input-test"
      />
      { isPassword && (
        <a
          href="/"
          className="input-text__forgot-pass"
          data-testid="forgot-link-test"
        >
          Forgot?
        </a>
      ) }
    </div>
  );
};

export default InputText;
