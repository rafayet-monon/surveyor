import AuthAdapter from 'adapters/authAdapter';
import LocalStorage from 'services/localStorage';

const refreshToken = async () => {
  const localStorageService = LocalStorage.getService();

  try {
    await AuthAdapter.refreshToken(localStorageService.getRefreshToken())
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      .then((resData) => {
        const {
          access_token,
          token_type,
          refresh_token
        } = resData.data.attributes;
        const authorization_token = `${token_type} ${access_token}`;
        localStorageService.setToken(authorization_token, refresh_token);

        window.location.href = '/';
      });
  } catch (error) {
    localStorageService.clearToken();

    window.location.href = '/login';
  }
};

export default (instance) => {
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status !== 401) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      } else {
        refreshToken();
      }
    }
  );
};
