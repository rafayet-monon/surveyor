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

export default instance;
