import React, { createContext } from 'react';

const DetailsContext = createContext();

const DetailsProvider = ({ surveyDetail, questionList, children }) => {
  // Using the prebuild questionList and passing it to context provider
  // so that it can be used among its' children
  return (
    <DetailsContext.Provider
      value={{ surveyDetail, questionList }}
    >
      { children }
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
