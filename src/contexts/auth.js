import React, { createContext, useEffect, useReducer } from 'react';

import AuthReducer from 'reducers/auth';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  authorization_token: null
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    let authorization_token = localStorage.getItem('authorization_token');

    if (authorization_token && !state.isAuthenticated) {
      dispatch({ type: 'REFRESH' });
    }
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      { children }
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
