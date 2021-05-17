import Api from 'helpers/api';

class AuthAdapter {
  static get DEFAULT_PAYLOAD() {
    return {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET
    };
  }

  static login = (email, password) => {
    return Api.post('api/v1/oauth/token', {
      grant_type: 'password',
      email,
      password,
      ...this.DEFAULT_PAYLOAD
    });
  };

  static refreshToken = (refresh_token) => {
    return Api.post('api/v1/oauth/token', {
      grant_type: 'refresh_token',
      refresh_token,
      ...this.DEFAULT_PAYLOAD
    });
  };

  static forgotPassword = (email) => {
    return Api.post('api/v1/passwords', {
      user: { email },
      ...this.DEFAULT_PAYLOAD
    });
  };
}

export default AuthAdapter;
