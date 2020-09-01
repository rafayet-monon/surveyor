import React from 'react';

import { Field } from 'formik';

const FormInputGroup = ({
  label,
  inputType,
  inputId,
  name,
  forgotPassLink,
}) => {
  return (
    <div className="form-input-group">
      <div className="form-input-group__container">
        <label htmlFor={ inputId } className="form-input-group__label">
          { label }
        </label>
        <Field
          type={ inputType }
          id={ inputId }
          className="form-control form-input-group__input"
          name={ name }
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
