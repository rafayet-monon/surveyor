import React from 'react';

import Logo from 'components/Auth/Logo';
import BackgroundLayout from 'components/BackgroundLayout';
import backgroundImage from 'images/auth_background.png';

import Form from './form';

const Page = () => {
  const logoLabel = 'Sign in to Nimble';

  return (
    <BackgroundLayout backgroundImage={ backgroundImage }>
      <div className="container container-login">
        <Logo label={ logoLabel } />

        <Form />
      </div>
    </BackgroundLayout>
  );
};

export default Page;
