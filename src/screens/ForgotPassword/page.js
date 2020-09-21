import React from 'react';

import Alert from 'components/Auth/Alert';
import Logo from 'components/Auth/Logo';
import BackgroundLayout from 'components/BackgroundLayout';
import backgroundImage from 'images/auth_background.png';
import Form from 'screens/ForgotPassword/form';

const Page = () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';

  return (
    <BackgroundLayout backgroundImage={ backgroundImage }>
      <div className="container container-forgot-password">
        <Logo label={ logoLabel } />
        <Alert
          title="Check your email."
          description="We've emailed you instruction to reset your password."
        />
        <Form />
      </div>
    </BackgroundLayout>
  );
};

export default Page;
