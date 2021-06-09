import React, { useContext } from 'react';

import { DetailsContext } from 'contexts/details';
import { SurveyAnswerProvider } from 'contexts/surveyAnswer';
import { SurveyStatusContext } from 'contexts/surveyStatus';
import Detail from 'screens/SurveyDetail/detail';
import Questions from 'screens/SurveyDetail/question';

const ShowSurvey = () => {
  const surveyStatusContext = useContext(SurveyStatusContext);
  const detailsContext = useContext(DetailsContext);

  return (
    <React.Fragment>
      { surveyStatusContext.state.started ? (
        <SurveyAnswerProvider surveyId={ detailsContext.surveyDetail.data.id }>
          <Questions />
        </SurveyAnswerProvider>
      ) : (
        <Detail />
      ) }
    </React.Fragment>
  );
};

export default ShowSurvey;
