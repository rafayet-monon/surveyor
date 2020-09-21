import React from 'react';

import FormInputGroup from 'components/Auth/FormInputGroup';
import FormButton from 'components/FormButton';

const Form = () => {
  return (
    <div className="form-forgot-password">
      <form>
        <FormInputGroup label="Email" inputId="email" inputType="email" />

        <FormButton label="Send Recovery Email" />
      </form>
    </div>
  );
};

export default Form;
