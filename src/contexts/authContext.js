import React, { createContext, useEffect, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTH': {
      const user = action.payload.attributes;
      const token = action.payload.attributes.token;
      localStorage.setItem('user', user);
      localStorage.setItem('token', token);
      return {
        ...state,
        isAuthenticated: true,
        user: user,
        token: token,
      };
    }
    case 'REFRESH': {
      return {
        ...state,
        isAuthenticated: true,
        user: localStorage.getItem('user'),
        token: localStorage.getItem('token'),
      };
    }
    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    }
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
