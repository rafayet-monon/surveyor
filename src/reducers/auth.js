import LocalStorage from 'services/localStorage';

const AuthReducer = (state, action) => {
  const localStorageService = LocalStorage.getService();

  switch (action.type) {
    case 'AUTH': {
      const {
        access_token,
        token_type,
        refresh_token
      } = action.payload.attributes;
      const authorization_token = `${token_type} ${access_token}`;
      localStorageService.setToken(authorization_token, refresh_token);

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
        authorization_token: localStorageService.getAuthToken()
      };
    }
    case 'LOGOUT': {
      localStorageService.clearToken();
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
