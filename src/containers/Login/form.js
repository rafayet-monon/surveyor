import React from 'react';

import ButtonSubmit from 'components/Auth/ButtonSubmit';
import InputText from 'components/Auth/InputText';

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
        />

        <ButtonSubmit label="Sign in" />
      </form>
    </div>
  );
};

export default Form;
