import React from 'react';

import Alert from 'components/Auth/Alert';
import Logo from 'components/Auth/Logo';
import BackButton from 'components/BackButton';
import PageBackground from 'components/PageBackground';
import ForgotPasswordForm from 'screens/ForgotPassword/forgotPasswordForm';
import ForgotPasswordHandler from 'screens/ForgotPassword/forgotPasswordHandler';

const ForgotPassword = () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';
  const { handleSubmit, requestSuccess, error } = ForgotPasswordHandler();

  return (
    <PageBackground type="default">
      <BackButton />

      <div className="container container-forgot-password">
        <Logo label={ logoLabel } />

        { error && (
          <Alert
            alertType="error"
            title="Unable send reset password instruction"
            description={ error }
          />
        ) }

        { requestSuccess && (
          <Alert
            title="Check your email."
            description="We've emailed you instruction to reset your password."
          />
        ) }

        <ForgotPasswordForm onSubmitHandler={ handleSubmit } />
      </div>
    </PageBackground>
  );
};

export default ForgotPassword;
