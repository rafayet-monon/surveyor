import React, { useState, useEffect, useContext } from 'react';

import { useParams, Redirect } from 'react-router-dom';

import SurveyAdapter from 'adapters/surveyAdapter';
import Loader from 'components/Loader';
import PageBackground from 'components/PageBackground';
import { AuthContext } from 'contexts/auth';
import { DetailsProvider } from 'contexts/details';
import { SurveyStatusProvider } from 'contexts/surveyStatus';
import buildQuestionList from 'screens/SurveyDetail/QuestionBuilders/buildQuestionList';
import ShowSurvey from 'screens/SurveyDetail/showSurvey';

const SurveyDetail = () => {
  const authContext = useContext(AuthContext);
  const { surveyId } = useParams();
  const [surveyDetail, setSurveyDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [questionList, setQuestionList] = useState(null);

  const getSurveyDetail = async () => {
    try {
      await SurveyAdapter.get(
        surveyId,
        authContext.state.authorization_token
      ).then(function (response) {
        if (response.status === 200) {
          setSurveyDetail(response.data);
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

  useEffect(() => {
    if (surveyDetail.length !== 0) {
      setQuestionList(buildQuestionList(surveyDetail));
    }
  }, [surveyDetail]);

  return (
    <PageBackground type="image" imagePath={ backgroundImage }>
      { isLoading ? (
        <Loader />
      ) : (
        <DetailsProvider
          surveyDetail={ surveyDetail }
          questionList={ questionList }
        >
          <SurveyStatusProvider>
            <ShowSurvey />
          </SurveyStatusProvider>
        </DetailsProvider>
      ) }
    </PageBackground>
  );
};

export default SurveyDetail;
