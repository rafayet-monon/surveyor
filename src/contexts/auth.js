import React, { createContext, useEffect, useReducer } from 'react';

import AuthReducer from 'reducers/auth';
import LocalStorage from 'services/localStorage';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  authorization_token: null
};

const AuthProvider = ({ children }) => {
  const localStorageService = LocalStorage.getService();
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    let authorizationToken = localStorageService.getAuthToken();
    let refreshToken = localStorageService.getRefreshToken();

    if (
      (authorizationToken && !state.isAuthenticated) ||
      (!authorizationToken && refreshToken)
    ) {
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
