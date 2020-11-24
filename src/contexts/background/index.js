import React, { createContext, useReducer } from 'react';

import BackgroundReducer from 'contexts/background/reducer';

const BackgroundContext = createContext();

const initialState = {
  currentBackground: null,
};

const BackgroundProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BackgroundReducer, initialState);

  return (
    <BackgroundContext.Provider value={{ state, dispatch }}>
      { children }
    </BackgroundContext.Provider>
  );
};

export { BackgroundProvider, BackgroundContext };
