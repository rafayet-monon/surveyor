// Build an object to push into the AnswerResponseBuilder answers object
const QuestionObjectBuilder = (questionId, answerId) => {
  return {
    id: questionId,
    answers: [
      {
        id: answerId
      }
    ]
  }
}

export default QuestionObjectBuilder;
