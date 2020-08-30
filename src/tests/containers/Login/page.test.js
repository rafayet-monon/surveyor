import Page from 'containers/Login/page';
import AuthPage from 'tests/shared_examples/authPage';

describe('When visited the Login Page', () => {
  const logoLabel = 'Sign in to Nimble';
  AuthPage(logoLabel, Page);
});
