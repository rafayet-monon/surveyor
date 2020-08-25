import React, { createContext, useEffect, useReducer } from 'react';
import AuthReducer from 'contexts/auth/reducer';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token && !state.isAuthenticated) {
      dispatch({ type: 'REFRESH' });
    }
  });

  return (
    <AuthContext.Provider value={ { state, dispatch } }>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
