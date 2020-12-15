import React, { useContext } from 'react';

import { SurveyStatusContext } from 'contexts/surveyStatus';
import Detail from 'screens/SurveyDetail/detail';
import Questions from 'screens/SurveyDetail/question';

const ShowSurvey = () => {
  const surveyStatusContext = useContext(SurveyStatusContext);

  return (
    <div>{ surveyStatusContext.state.started ? <Questions /> : <Detail /> }</div>
  );
};

export default ShowSurvey;
