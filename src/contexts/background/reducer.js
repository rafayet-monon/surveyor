const BackgroundReducer = (state, action) => {
  switch (action.type) {
    case 'SURVEY': {
      const image = action.payload;
      return {
        ...state,
        currentBackground: image,
      };
    }
    default:
      return state;
  }
};

export default BackgroundReducer;
