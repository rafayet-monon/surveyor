import React from 'react';

import { Formik, Form } from 'formik';

import FormInputGroup from 'components/Auth/FormInputGroup';
import FormButton from 'components/FormButton';

const ForgotPasswordForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={ () => {} } className="row">
      <Form>
        <FormInputGroup label="Email" inputId="email" inputType="email" />

        <FormButton label="Send Recovery Email" />
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
