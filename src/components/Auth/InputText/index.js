import React from 'react';

const InputText = ({ labelFor, label, inputType, inputId, forgotPassLink }) => {
  return (
    <div className="input-text">
      <div className="input-text__container">
        <label htmlFor={ labelFor } className="input-text__label">
          { label }
        </label>
        <input
          type={ inputType }
          id={ inputId }
          className="form-control input-text__box"
        />
      </div>
      { forgotPassLink && (
        <a href="/" className="input-text__forgot-pass">
          Forgot?
        </a>
      ) }
    </div>
  );
};

export default InputText;
