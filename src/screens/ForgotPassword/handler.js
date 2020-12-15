import { useState } from 'react';

import AuthAdapter from 'adapters/authAdapter';

const Handler = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      await AuthAdapter.forgotPassword(values.email).then(function (response) {
        if (response.status === 200) {
          setRequestSuccess(true);

          return response.data;
        }
      });
    } catch (error) {
      if (error.response.status === 400) {
        setError('Invalid email');
      } else {
        setError('Something went wrong. Please try again!');
      }
    }
  };

  return {
    handleSubmit,
    requestSuccess,
    error
  };
};

export default Handler;
