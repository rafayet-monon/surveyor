import React from 'react';

import FormInputGroup from 'components/Auth/FormInputGroup';
import FormButton from 'components/FormButton';

const Form = () => {
  return (
    <div className="row">
      <form>
        <FormInputGroup
          label="Email"
          labelFor="email"
          inputId="email"
          inputType="email"
        />

        <FormInputGroup
          label="Password"
          labelFor="password"
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
