// Build an object to push into the AnswerResponseBuilder answers object
const QuestionObjectBuilder = (questionId, answerId, answer) => {
  const object = {
    id: questionId,
    answers: [
      {
        id: answerId
      }
    ]
  };
  if (answer) {
    const index = object.answers.findIndex(key => key.id === answerId);

    object.answers[index].answer = answer;
  }

  return object;
};

export default QuestionObjectBuilder;
