import { fireEvent } from '@testing-library/react';

const SubmitForgotPasswordForm = (email, container) => {
  const email_field = container.querySelector('input[name="email"]');
  const submit = container.querySelector('button[type="submit"]');

  fireEvent.change(email_field, {
    target: {
      value: email
    }
  });

  fireEvent.click(submit);
};

export default SubmitForgotPasswordForm;
