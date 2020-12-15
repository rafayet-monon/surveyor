import React, { useContext } from 'react';

import BackButton from 'components/BackButton';
import * as Constants from 'constants/surveyStatus';
import { DetailsContext } from 'contexts/details';
import { SurveyStatusContext } from 'contexts/surveyStatus';

const Detail = () => {
  const detailsContext = useContext(DetailsContext);
  const { dispatch } = useContext(SurveyStatusContext);

  const startSurvey = () => {
    dispatch({
      type: Constants.SURVEY_START
    });
  };

  return (
    <div className="survey-detail">
      <BackButton />
      <div className="survey-detail__description">
        <img
          className="survey-detail__image"
          alt="SURVEY"
          src={ detailsContext.attributes.cover_image_url }
        />
        <h3 className="survey-detail__title">
          { detailsContext.attributes.title }
        </h3>
        <p className="survey-detail__subtitle">
          { detailsContext.attributes.description }
        </p>
        <button
          className="button button--primary survey-detail__action"
          onClick={ startSurvey }
        >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default Detail;
