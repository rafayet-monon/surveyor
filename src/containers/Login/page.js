import React from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import backgroundImage from '../../images/backgrounds/authentication_background.png';
import LogoWithLabel from '../../components/LogoWithLabel';
import Form from './form';

const Page = () => {
  const label = 'Sign in to Nimble';
  return (
    <div>
      <BackgroundLayout backgroundImage={backgroundImage}>
        <div className='login-wrapper'>
          <LogoWithLabel label={label} />

          <Form />
        </div>
      </BackgroundLayout>
    </div>
  );
};

export default Page;
