import React from 'react';

import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

const FormInputGroup = ({
  label,
  inputType,
  inputId,
  name,
  forgotPassLink
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
          className="input input--text"
          name={ name }
        />
      </div>
      { forgotPassLink && (
        <NavLink
          to="/forgot-password"
          className="form-input-group__forgot-password"
        >
          Forgot?
        </NavLink>
      ) }
    </div>
  );
};

export default FormInputGroup;
