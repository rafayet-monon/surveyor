import React from 'react';

import Alert from 'components/Auth/Alert';
import Logo from 'components/Auth/Logo';
import BackgroundLayout from 'components/BackgroundLayout';
import ForgotPasswordForm from 'containers/ForgotPassword/forgotPasswordForm';
import backgroundImage from 'images/auth_background.png';

const Page = () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';
  return (
    <BackgroundLayout backgroundImage={ backgroundImage }>
      <div className="container container-forgot-password">
        <Logo label={ logoLabel } />
        <Alert
          title="Check your email."
          description="We have emailed you instruction to reset your password."
        />
        <ForgotPasswordForm />
      </div>
    </BackgroundLayout>
  );
};

export default Page;
