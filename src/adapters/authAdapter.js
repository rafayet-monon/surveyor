import Api from 'utils/Api';

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
      email: email,
      password: password,
      ...this.DEFAULT_PAYLOAD
    });
  };

  static refreshToken = (refresh_token) => {
    return Api.post('api/v1/oauth/token', {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      ...this.DEFAULT_PAYLOAD
    });
  };

  static forgotPassword = (email) => {
    return Api.post('api/v1/passwords', {
      user: { email: email },
      ...this.DEFAULT_PAYLOAD
    });
  };
}

export default AuthAdapter;
