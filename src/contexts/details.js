import React, { createContext } from 'react';

const DetailsContext = createContext();

const DetailsProvider = ({ surveyDetail, children }) => {
  return (
    <DetailsContext.Provider value={ surveyDetail }>
      { children }
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
