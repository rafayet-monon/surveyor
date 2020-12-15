import { useContext, useState } from 'react';

import AuthAdapter from 'adapters/authAdapter';
import { AuthContext } from 'contexts/auth';

const Handler = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    try {
      await AuthAdapter.login(values.email, values.password)
        .then(function (response) {
          if (response.status === 200) {
            setRequestSuccess(true);

            return response.data;
          }
        })
        .then((resData) => {
          dispatch({
            type: 'AUTH',
            payload: resData.data
          });
        });
    } catch (error) {
      if (error.response.status === 400) {
        setError('Invalid email or password');
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
