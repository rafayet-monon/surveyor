import React, { createContext, useReducer } from 'react';

import SurveyAnswer from 'reducers/surveyAnswer';

const SurveyAnswerContext = createContext();

const initialState = {
  survey_id: null,
  questions: []
};

const SurveyAnswerProvider = ({ surveyId, children }) => {
  initialState.survey_id = surveyId;
  const [state, dispatch] = useReducer(SurveyAnswer, initialState);

  return (
    <SurveyAnswerContext.Provider value={{ state, dispatch }}>
      { children }
    </SurveyAnswerContext.Provider>
  );
};

export { SurveyAnswerProvider, SurveyAnswerContext };
