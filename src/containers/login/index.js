import React from 'react';
import BackgroundLayout from '../../components/backgroundLayout';
import backgroundImage from '../../images/backgrounds/authentication_background.png';
import LogoWithLabel from '../../components/logoWithLabel';

const Login = () => {
  const label = 'Sign in to Nimble';
  return (
    <div>
      <BackgroundLayout backgroundImage={backgroundImage}>
        <div className='container'>
          <div className='login-wrapper'>
            <LogoWithLabel label={label} />
          </div>
        </div>
      </BackgroundLayout>
    </div>
  );
};

export default Login;
