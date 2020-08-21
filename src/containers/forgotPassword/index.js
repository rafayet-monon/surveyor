import React from 'react';
import BackgroundLayout from '../../components/backgroundLayout';
import backgroundImage from '../../images/backgrounds/authentication_background.png';

const ForgotPassword = () => {
  return (
    <div>
      <BackgroundLayout backgroundImage={backgroundImage}>
        <h1>Forgot Password</h1>
      </BackgroundLayout>
    </div>
  );
};

export default ForgotPassword;
