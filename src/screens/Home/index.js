import React, { useEffect, useState, useContext } from 'react';

import SurveyAdapter from 'adapters/surveyAdapter';
import Loader from 'components/Loader';
import { AuthContext } from 'contexts/auth';
import { BackgroundProvider } from 'contexts/background';
import Details from 'screens/Home/details';

const Home = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      await SurveyAdapter.getList(1, authContext.state.authorization_token).then(
        function (response) {
          if (response.status === 200) {
            setResponse(response.data);
            setIsLoading(false);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BackgroundProvider>
      { isLoading ? <Loader /> : <Details surveyResponse={ response } /> }
    </BackgroundProvider>
  );
};

export default Home;
