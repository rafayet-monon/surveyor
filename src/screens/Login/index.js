import React from 'react';

import { Redirect } from 'react-router-dom';

import Alert from 'components/Auth/Alert';
import Logo from 'components/Auth/Logo';
import PageBackground from 'components/PageBackground';
import Handler from 'screens/Login/handler';
import LoginForm from 'screens/Login/loginForm';

const Login = () => {
  const logoLabel = 'Sign in to Nimble';
  const { handleSubmit, requestSuccess, error } = Handler();

  if (requestSuccess) {
    return <Redirect to={ '/' } />;
  }

  return (
    <PageBackground type="default">
      <div className="container-login">
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
    </PageBackground>
  );
};

export default Login;
