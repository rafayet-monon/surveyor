import { useContext, useState } from 'react';

import { AuthContext } from 'contexts/auth';
import Api from 'utils/Api';

const Handler = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await Api.post('api/v1/oauth/token', {
        grant_type: 'password',
        email: values.email,
        password: values.password,
      })
        .then(function (response) {
          if (response.status === 200) {
            setRequestSuccess(true);

            return response.data;
          }
        })
        .then((resData) => {
          dispatch({
            type: 'AUTH',
            payload: resData.data,
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    } catch (error) {
      if (error.response.status === 400) {
        setError('Invalid email or password');
      } else {
        setError('Something wen wrong! Please try again');
      }
    }
  };

  return {
    handleSubmit,
    requestSuccess,
    error,
  };
};

export default Handler;
