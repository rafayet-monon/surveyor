import mockAxios from 'axios';

import LocalStorage from 'services/localStorage';
import RefreshToken from 'services/refreshToken';
import RefreshTokenResponse from 'tests/fixtures/refreshTokenResponse.json';

describe('when refresh token is performed', () => {
  delete window.location;
  window.location = { href: jest.fn() };

  describe('if refresh token is missing', () => {
    beforeEach(async () => {
      mockAxios.post.mockImplementation(() =>
        Promise.resolve({ data: null, status: 400 })
      );
    });

    it('renders the login page', async () => {
      await RefreshToken();

      expect(window.location.href).toBe('/login');
    });

    it('the tokens in the storage are cleared', async () => {
      const localStorageService = LocalStorage.getService();
      localStorageService.setToken('mock', 'mock');
      await RefreshToken();

      expect(localStorage.getItem('authorization_token')).toBe(null);
      expect(localStorage.getItem('refresh_token')).toBe(null);
    });
  });

  describe('if refresh token is valid', () => {
    beforeEach(async () => {
      mockAxios.post.mockImplementation(() =>
        Promise.resolve({ data: RefreshTokenResponse, status: 200 })
      );

      await RefreshToken();
    });

    it('renders the home page', () => {
      expect(window.location.href).toBe('/');
    });

    it('updates the storage with new tokens', () => {
      const refreshToken = RefreshTokenResponse.data.attributes.refresh_token;
      const accessToken = RefreshTokenResponse.data.attributes.access_token;

      expect(localStorage.getItem('authorization_token')).toBe(
        `Bearer ${accessToken}`
      );
      expect(localStorage.getItem('refresh_token')).toBe(refreshToken);
    });
  });
});
