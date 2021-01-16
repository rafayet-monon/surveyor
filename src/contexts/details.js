import React, { createContext } from 'react';

const DetailsContext = createContext();

const DetailsProvider = ({ surveyDetail, questionList, children }) => {
  return (
    <DetailsContext.Provider
      value={{ surveyDetail: surveyDetail, questionList: questionList }}
    >
      { children }
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
