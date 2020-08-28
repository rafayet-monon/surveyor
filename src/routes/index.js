import React from 'react';

import { Switch } from 'react-router-dom';

import Home from 'containers/Home';
import Login from 'containers/Login';
import { AuthenticatedRoute, UnauthenticatedRoute } from 'routes/protectedRoute';

const RouteList = () => {
  return (
    <Switch>
      <AuthenticatedRoute path="/" exact component={ Home } />
      <UnauthenticatedRoute path="/login" component={ Login } />
    </Switch>
  );
};

export default RouteList;
