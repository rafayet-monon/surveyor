import LocalStorage from 'services/localStorage';

describe('when LocalStorage service is called', () => {
  const localStorageService = LocalStorage.getService();
  const mockAuthToken = 'Bearer 123';
  const mockRefreshToken = '123';

  beforeEach(() => {
    localStorage.clear();
    localStorageService.setToken(mockAuthToken, mockRefreshToken);
  });

  afterAll(() => localStorage.clear());

  it('sets token to localStorage', async () => {
    expect(localStorage.__STORE__['authorization_token']).toBe(mockAuthToken);
    expect(localStorage.__STORE__['refresh_token']).toBe(mockRefreshToken);
  });

  it('returns the authorization_token', async () => {
    const authToken = localStorageService.getAuthToken();

    expect(authToken).toBe(mockAuthToken);
  });

  it('returns the refresh_token', async () => {
    const refreshToken = localStorageService.getRefreshToken();

    expect(refreshToken).toBe(mockRefreshToken);
  });

  it('clears localStorage', async () => {
    localStorageService.clearToken();

    expect(localStorage.__STORE__['authorization_token']).toBe(undefined);
    expect(localStorage.__STORE__['refresh_token']).toBe(undefined);
  });
});
