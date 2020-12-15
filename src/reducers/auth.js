const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH': {
      const { access_token, token_type } = action.payload.attributes;
      const authorization_token = `${token_type} ${access_token}`;
      localStorage.setItem('authorization_token', authorization_token);
      return {
        ...state,
        isAuthenticated: true,
        authorization_token: authorization_token
      };
    }
    case 'REFRESH': {
      return {
        ...state,
        isAuthenticated: true,
        authorization_token: localStorage.getItem('authorization_token')
      };
    }
    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        authorization_token: null
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
