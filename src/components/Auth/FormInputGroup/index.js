import React from 'react';

const FormInputGroup = ({ label, inputType, inputId, forgotPassLink }) => {
  return (
    <div className="form-input-group">
      <div className="form-input-group__container">
        <label htmlFor={ inputId } className="form-input-group__label">
          { label }
        </label>
        <input
          type={ inputType }
          id={ inputId }
          className="form-input-group__input"
        />
      </div>
      { forgotPassLink && (
        <a href="/" className="form-input-group__forgot-password">
          Forgot?
        </a>
      ) }
    </div>
  );
};

export default FormInputGroup;
