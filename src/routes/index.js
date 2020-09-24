import React from 'react';

import { Switch } from 'react-router-dom';

import {
  AuthenticatedRoute,
  UnauthenticatedRoute,
} from 'routes/protectedRoute';
import ForgotPassword from 'screens/ForgotPassword';
import Home from 'screens/Home';
import Login from 'screens/Login';

const RouteList = () => {
  return (
    <Switch>
      <AuthenticatedRoute path="/" exact component={ Home } />
      <UnauthenticatedRoute path="/login" component={ Login } />
      <UnauthenticatedRoute
        path="/forgot-password"
        component={ ForgotPassword }
      />
    </Switch>
  );
};

export default RouteList;
