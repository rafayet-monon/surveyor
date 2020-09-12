import React from 'react';

const FormInputGroup = ({ labelFor, label, inputType, inputId, forgotPassLink }) => {
  return (
    <div className="form-input-group">
      <div className="form-input-group__container">
        <label htmlFor={ labelFor } className="form-input-group__label">
          { label }
        </label>
        <input
          type={ inputType }
          id={ inputId }
          className="form-control form-input-group__box"
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
