import React from 'react';

import { Switch } from 'react-router-dom';

import {
  AuthenticatedRoute,
  UnauthenticatedRoute,
} from 'routes/protectedRoute';
import ForgotPassword from 'screens/ForgotPassword';
import Home from 'screens/Home';
import LazyLoader from 'screens/LazyLoader';
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
      <UnauthenticatedRoute path="/loader" component={ LazyLoader } />
    </Switch>
  );
};

export default RouteList;
