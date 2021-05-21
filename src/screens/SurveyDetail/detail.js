import React, { useContext } from 'react';

import BackButton from 'components/BackButton';
import * as Constants from 'constants/surveyStatus';
import { DetailsContext } from 'contexts/details';
import { SurveyStatusContext } from 'contexts/surveyStatus';

const Detail = () => {
  const detailsContext = useContext(DetailsContext);
  const { dispatch } = useContext(SurveyStatusContext);

  // Pick data according to need from the contexts which provides surveyDetail
  // and questionList
  const coverImage =
    detailsContext.surveyDetail.data.attributes.cover_image_url;
  const title = detailsContext.surveyDetail.data.attributes.title;
  const introduction = detailsContext.questionList.find(
    (question) => question.type === 'intro'
  ).text;

  const startSurvey = () => {
    dispatch({
      type: Constants.SURVEY_START
    });
  };

  return (
    <div className="survey-detail">
      <BackButton />
      <div className="survey-detail__description">
        <img className="survey-detail__image" alt="SURVEY" src={ coverImage } data-test-id="survey-cover-image" />
        <h3 className="survey-detail__title" data-test-id="survey-title">{ title }</h3>
        <p className="survey-detail__subtitle" data-test-id="survey-subtitle">{ introduction }</p>
        <button
          className="button button--primary survey-detail__action"
          onClick={ startSurvey }
          data-test-id="survey-start-button"
        >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default Detail;
