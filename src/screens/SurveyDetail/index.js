import React, { useState, useEffect, useContext } from 'react';

import { useParams, Redirect } from 'react-router-dom';

import Loader from 'components/Loader';
import PageBackground from 'components/PageBackground';
import { AuthContext } from 'contexts/auth';
import { DetailsProvider } from 'contexts/details';
import Detail from 'screens/SurveyDetail/detail';

import Api from '../../utils/Api';

const SurveyDetail = () => {
  const authContext = useContext(AuthContext);
  const { surveyId } = useParams();
  const [surveyDetail, setSurveyDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const getSurveyDetail = async () => {
    try {
      await Api.get(`api/v1/surveys/${surveyId}`, {
        headers: {
          Authorization: authContext.state.authorization_token,
        },
      }).then(function (response) {
        if (response.status === 200) {
          setSurveyDetail(response.data.data);
          setBackgroundImage(response.data.data.attributes.cover_image_url);
          setIsLoading(false);
        }
      });
    } catch (error) {
      return <Redirect to={ '/' } />;
    }
  };

  useEffect(() => {
    getSurveyDetail();
  }, []);

  return (
    <PageBackground type="image" imagePath={ backgroundImage }>
      { isLoading ? (
        <Loader />
      ) : (
        <DetailsProvider surveyDetail={ surveyDetail }>
          <Detail />
        </DetailsProvider>
      ) }
    </PageBackground>
  );
};

export default SurveyDetail;
