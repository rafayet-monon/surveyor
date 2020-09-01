import React from 'react';

import { Switch } from 'react-router-dom';

import ForgotPassword from 'containers/ForgotPassword';
import Home from 'containers/Home';
import LazyLoader from 'containers/LazyLoader';
import Login from 'containers/Login';
import {
  AuthenticatedRoute,
  UnauthenticatedRoute,
} from 'routes/protectedRoute';

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
