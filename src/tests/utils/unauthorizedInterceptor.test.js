import axios from 'axios';

import interceptor from 'utils/unauthorizedInterceptor';

jest.mock('axios');

describe('interceptor', () => {
  it('redirects to login route when response status is 401', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: 'url'
      }
    });
    axios.interceptors.response.use = jest.fn((successCb, failCb) => {
      failCb({
        response: {
          status: 401
        }
      });
    });
    interceptor(axios);
    expect(window.location.href).toEqual('/login');
  });
});
