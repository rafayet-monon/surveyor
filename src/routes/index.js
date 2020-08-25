import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthenticaedRoute, UnauthenticaedRoute } from './protectedRoute';
import Home from '../containers/Home';
import Login from '../containers/Login';

const RouteList = () => {
  return (
    <Switch>
      <AuthenticaedRoute path="/" exact component={Home} />
      <UnauthenticaedRoute path="/login" component={Login} />
    </Switch>
  );
};

export default RouteList;
