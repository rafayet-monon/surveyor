import React from 'react';

import { Redirect } from 'react-router-dom';

import Alert from 'components/Auth/Alert';
import Logo from 'components/Auth/Logo';
import BackgroundLayout from 'components/BackgroundLayout';
import Handler from 'containers/Login/handler';
import LoginForm from 'containers/Login/loginForm';
import backgroundImage from 'images/auth_background.png';

const Page = () => {
  const logoLabel = 'Sign in to Nimble';
  const { handleSubmit, requestSuccess, error } = Handler();

  if (requestSuccess) {
    return <Redirect to={ '/' } />;
  }

  return (
    <BackgroundLayout backgroundImage={ backgroundImage }>
      <div className="container container-login">
        <Logo label={ logoLabel } />

        { error && (
          <Alert
            alertType="error"
            title="Unable to login"
            description={ error }
          />
        ) }

        <LoginForm onSubmitHandler={ handleSubmit } />
      </div>
    </BackgroundLayout>
  );
};

export default Page;
