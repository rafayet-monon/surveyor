import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { DetailsContext } from 'contexts/details';

const Detail = () => {
  const detailsContext = useContext(DetailsContext);
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <div className="survey-detail">
      <div className="survey-detail__header">
        <div className="survey-detail__header-left">
          <button className="button button--circle button--circle-transparent" onClick={ goBack }>
            <span className="survey-detail__arrow-left" />
          </button>
        </div>
      </div>
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
        <div className="survey-detail__start-survey">
          <button className="button button--white">
            Start Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
