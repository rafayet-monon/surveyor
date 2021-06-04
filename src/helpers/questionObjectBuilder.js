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
