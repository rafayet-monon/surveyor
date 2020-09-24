import React from 'react';

import Alert from 'components/Auth/Alert';
import Logo from 'components/Auth/Logo';
import PageBackground from 'components/PageBackground';
import Form from 'screens/ForgotPassword/form';

const ForgotPassword = () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';

  return (
    <PageBackground>
      <div className="container container-forgot-password">
        <Logo label={ logoLabel } />
        <Alert
          title="Check your email."
          description="We've emailed you instruction to reset your password."
        />
        <Form />
      </div>
    </PageBackground>
  );
};

export default ForgotPassword;
