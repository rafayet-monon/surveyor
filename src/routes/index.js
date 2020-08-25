import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthenticatedRoute, UnauthenticatedRoute } from 'routes/protectedRoute';
import Home from 'containers/Home';
import Login from 'containers/Login';

const RouteList = () => {
  return (
    <Switch>
      <AuthenticatedRoute path="/" exact component={ Home } />
      <UnauthenticatedRoute path="/login" component={ Login } />
    </Switch>
  );
};

export default RouteList;
