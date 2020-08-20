import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthenticaedRoute, UnauthenticaedRoute } from './protectedRoute';
import Home from '../containers/home';
import Login from '../containers/login';

const RouteList = () => {
  return (
    <Switch>
      <AuthenticaedRoute path="/" exact component={Home} />
      <UnauthenticaedRoute path="/login" component={Login} />
    </Switch>
  );
};

export default RouteList;
