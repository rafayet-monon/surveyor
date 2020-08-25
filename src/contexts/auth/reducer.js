const AuthReducer = (state, action) => {
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

export default AuthReducer;
