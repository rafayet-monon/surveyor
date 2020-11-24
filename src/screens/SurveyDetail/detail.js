import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { DetailsContext } from 'contexts/details';
import backIcon from 'images/back-button-white.svg';

const Detail = () => {
  const detailsContext = useContext(DetailsContext);
  const history = useHistory();
  const goBack = () => history.push('/');

  return (
    <div className="survey-detail">
      <div className="survey-detail__header">
        <div className="survey-detail__header-left">
          <button className="button" onClick={ goBack }>
            <img
              src={ backIcon }
              alt="close"
              className="survey-detail__back-icon"
            />
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
          <button className="button button--primary">Start Survey</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
