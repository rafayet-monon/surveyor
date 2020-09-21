import React from 'react';

import FormInputGroup from 'components/Auth/FormInputGroup';
import FormButton from 'components/FormButton';

const Form = () => {
  return (
    <div className="form-login">
      <form>
        <FormInputGroup label="Email" inputId="email" inputType="email" />

        <FormInputGroup
          label="Password"
          inputId="password"
          inputType="password"
          forgotPassLink={ true }
        />

        <FormButton label="Sign in" />
      </form>
    </div>
  );
};

export default Form;
