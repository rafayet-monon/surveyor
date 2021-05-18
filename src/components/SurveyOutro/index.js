import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import PageBackground from 'components/PageBackground';
import SuccessGif from 'images/thank-animation.gif';

const SurveyOutro = ({ message }) => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  }, [history]);

  return (
    <PageBackground>
      <div className="survey-outro">
        <img className="survey-outro__gif" src={ SuccessGif } alt="success" />
        <span className="survey-outro__message">{ message }</span>
      </div>
    </PageBackground>
  );
};

export default SurveyOutro;
