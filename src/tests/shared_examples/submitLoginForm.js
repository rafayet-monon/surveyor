import { fireEvent } from '@testing-library/react';

const SubmitLoginForm = (email, password, container) => {
  const email_field = container.querySelector('input[name="email"]');
  const password_field = container.querySelector('input[name="password"]');
  const submit = container.querySelector('button[type="submit"]');

  fireEvent.change(email_field, {
    target: {
      value: email
    }
  });

  fireEvent.change(password_field, {
    target: {
      value: password
    }
  });
  fireEvent.click(submit);
};

export default SubmitLoginForm;
