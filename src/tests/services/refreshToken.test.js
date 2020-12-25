import mockAxios from 'axios';

import RefreshToken from 'services/refreshToken';
import RefreshTokenResponse from 'tests/fixtures/refreshTokenResponse.json';

describe('when refresh token is performed', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  delete window.location;
  window.location = { reload: jest.fn() };

  it('renders the login page if refresh token is not successful', async () => {
    mockAxios.post.mockImplementation(() =>
      Promise.resolve({ data: null, status: 400 })
    );

    RefreshToken();

    expect(localStorage.__STORE__['authorization_token']).toBe(undefined);
    expect(localStorage.__STORE__['refresh_token']).toBe(undefined);
  });

  it('updates storage with new token if refresh token is successful', async () => {
    const refreshToken = RefreshTokenResponse.data.attributes.refresh_token;
    const accessToken = RefreshTokenResponse.data.attributes.access_token;
    mockAxios.post.mockImplementation(() =>
      Promise.resolve({ data: RefreshTokenResponse, status: 200 })
    );

    RefreshToken();

    expect(localStorage.setItem).not.toHaveBeenLastCalledWith(
      'refresh_token',
      refreshToken
    );
    expect(localStorage.setItem).not.toHaveBeenLastCalledWith(
      'authorization_token',
      accessToken
    );
  });
});
