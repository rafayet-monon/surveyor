import axios from 'axios';

import UnauthorizedInterceptor from 'utils/unauthorizedInterceptor';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
});

UnauthorizedInterceptor(instance);

export default instance;
