import React from 'react';

import Logo from 'components/Auth/Logo';
import PageBackground from 'components/PageBackground';
import Form from 'screens/Login/form';

const Login = () => {
  const logoLabel = 'Sign in to Nimble';

  return (
    <PageBackground>
      <div className="container container-login">
        <Logo label={ logoLabel } />

        <Form />
      </div>
    </PageBackground>
  );
};

export default Login;
