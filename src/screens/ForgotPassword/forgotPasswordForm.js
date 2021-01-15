import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormInputGroup from 'components/Auth/FormInputGroup';
import FormButton from 'components/FormButton';

const ForgotPasswordForm = ({ onSubmitHandler }) => {
  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required')
  });

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ validationSchema }
      onSubmit={ onSubmitHandler }
      validateOnChange={ false }
      validateOnBlur={ false }
      className="row"
    >
      { ({ errors, isSubmitting }) => (
        <Form>
          <FormInputGroup
            label="Email"
            inputId="email"
            inputType="email"
            name="email"
          />
          { errors.email && <p className="validation-error">{ errors.email }</p> }

          <FormButton label="Send Recovery Email" isDisabled={ isSubmitting } />
        </Form>
      ) }
    </Formik>
  );
};

export default ForgotPasswordForm;
