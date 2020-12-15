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
        localStorage.clear();
        window.location.href = '/login';

        return false;
      }
    }
  );
};
