import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormInputGroup from 'components/Auth/FormInputGroup';
import FormButton from 'components/FormButton';

const LoginForm = ({ onSubmitHandler }) => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
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

          <FormInputGroup
            label="Password"
            inputId="password"
            inputType="password"
            name="password"
            forgotPassLink={ true }
          />
          { errors.password && (
            <p className="validation-error">{ errors.password }</p>
          ) }

          <FormButton label="Sign in" isDisabled={ isSubmitting } />
        </Form>
      ) }
    </Formik>
  );
};

export default LoginForm;
