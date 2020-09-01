import axios from 'axios';

const authorization_token = localStorage.getItem('authorization_token');

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: authorization_token != null ? authorization_token : '',
  },
  responseType: 'json',
});

instance.interceptors.request.use(
  (req) => {
    req.data.client_id = process.env.REACT_APP_CLIENT_ID;
    req.data.client_secret = process.env.REACT_APP_CLIENT_SECRET;

    return req;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
