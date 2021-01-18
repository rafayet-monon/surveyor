import React, { createContext } from 'react';

const DetailsContext = createContext();

const DetailsProvider = ({ surveyDetail, questionList, children }) => {
  return (
    // Using the prebuild questionList and passing it to context provider
    // so that it can be used among its' children
    <DetailsContext.Provider
      value={{ surveyDetail: surveyDetail, questionList: questionList }}
    >
      { children }
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
