import React, { useContext } from 'react';

import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from 'contexts/auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);
  localStorage.setItem('visitedRoute', window.location.pathname);

  return (
    <Route
      { ...rest }
      render={ (props) =>
        state.isAuthenticated ? (
          <Component { ...props } />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);
  const visitedRoute = localStorage.getItem('visitedRoute');

  return (
    <Route
      { ...rest }
      render={ (props) =>
        !state.isAuthenticated ? (
          <Component { ...props } />
        ) : (
          <Redirect to={{ pathname: visitedRoute }} />
        )
      }
    />
  );
};

export { AuthenticatedRoute, UnauthenticatedRoute };
