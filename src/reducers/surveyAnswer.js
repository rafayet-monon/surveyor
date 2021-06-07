const SurveyAnswerReducer = (state, action) => {
  // Tries to find the index number of the question using question id
  // If found changes the answer with new answer
  // otherwise creates a new one
  const singleAnswerQuestion = () => {
    const questionIndex = state.questions.findIndex(
      (details) => details.id === action.data.id
    );
    if (questionIndex >= 0) {
      state.questions[questionIndex].answers = action.data.answers;
      return state.questions;
    } else {
      return [...state.questions, action.data];
    }
  };

  // Tries to find the index number of the question using question id
  // If not found creates a new question object with answer
  // if question is found, first it checks if the given answer exists. If it
  // exits it means it was unchecked and removes it from question object. If
  // doesn't exists, pushes the new answer to the question object
  const multipleAnswerQuestion = () => {
    const newAnswer = action.data.answers[0];
    const questionObj = state.questions.find(
      (details) => details.id === action.data.id
    );

    if (questionObj) {
      const answerObj = questionObj.answers.find(
        (answer) => answer.id === newAnswer.id
      );
      if (answerObj) {
        questionObj.answers.pop(answerObj);
      } else {
        questionObj.answers.push(newAnswer);
      }
      return state.questions;
    } else {
      return [...state.questions, action.data];
    }
  };

  switch (action.type) {
    case 'SINGLE_ANSWER': {
      return {
        ...state,
        questions: singleAnswerQuestion()
      };
    }
    case 'MULTIPLE_ANSWER': {
      return {
        ...state,
        questions: multipleAnswerQuestion()
      };
    }
    default:
      return state;
  }
};

export default SurveyAnswerReducer;
