import React, { createContext, useReducer } from 'react';

import SurveyStatusReducer from 'reducers/surveyStatus';

const SurveyStatusContext = createContext();

const initialState = {
  started: false
};

const SurveyStatusProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyStatusReducer, initialState);

  return (
    <SurveyStatusContext.Provider value={{ state, dispatch }}>
      { children }
    </SurveyStatusContext.Provider>
  );
};

export { SurveyStatusProvider, SurveyStatusContext };
