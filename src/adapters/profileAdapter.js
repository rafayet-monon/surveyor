import Api from 'helpers/api';

class ProfileAdapter {
  static get = (token) => {
    return Api.get('api/v1/me', {
      headers: {
        Authorization: token
      }
    });
  };
}

export default ProfileAdapter;
