import Api from 'utils/Api';

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
