const LocalStorage = (() => {
  let _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _setToken(authorization_token, refresh_token) {
    localStorage.setItem('authorization_token', authorization_token);
    localStorage.setItem('refresh_token', refresh_token);
  }

  function _getAuthToken() {
    return localStorage.getItem('authorization_token');
  }

  function _getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  function _clearToken() {
    localStorage.clear();
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAuthToken: _getAuthToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken
  };
})();

export default LocalStorage;
