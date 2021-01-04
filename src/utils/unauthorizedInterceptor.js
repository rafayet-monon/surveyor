import RefreshToken from 'services/refreshToken';

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
        RefreshToken();
      }
    }
  );
};
