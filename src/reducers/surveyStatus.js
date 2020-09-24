const SurveyStatusReducer = (state, action) => {
  switch (action.type) {
    case 'START': {
      return {
        ...state,
        started: true,
      };
    }
    default:
      return state;
  }
};

export default SurveyStatusReducer;
