import Page from 'containers/ForgotPassword/page';
import AuthPage from 'tests/shared_examples/authPage';

describe('When visited the Login Page', () => {
  const logoLabel =
    'Enter your email to receive instructions for resetting your password.';
  AuthPage(logoLabel, Page);
});
