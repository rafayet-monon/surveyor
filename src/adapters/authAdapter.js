import Api from 'utils/Api';

class AuthAdapter {
  static login = (email, password) => {
    return Api.post('api/v1/oauth/token', {
      grant_type: 'password',
      email: email,
      password: password,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET
    });
  };

  static refreshToken = (refresh_token) => {
    return Api.post('api/v1/oauth/token', {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET
    });
  };
}

export default AuthAdapter;
