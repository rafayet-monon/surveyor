import React from 'react';

import InputText from 'components/Auth/InputText';
import ButtonSubmit from 'components/ButtonSubmit';

const Form = () => {
  return (
    <div className="row">
      <form>
        <InputText
          label="Email"
          labelFor="email"
          inputId="email"
          inputType="email"
        />

        <InputText
          label="Password"
          labelFor="password"
          inputId="password"
          inputType="password"
          forgotPassLink={ true }
        />

        <ButtonSubmit label="Sign in" />
      </form>
    </div>
  );
};

export default Form;
