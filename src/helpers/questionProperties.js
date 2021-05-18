// Filter out intro and outro from the questionList leaving only the survey
// questions
const questionProperties = (filteredQuestions, currentQuestionIndex) => {
  const questionText = filteredQuestions[currentQuestionIndex].text;
  const questionSerial = `${currentQuestionIndex + 1} / ${ filteredQuestions.length }`;
  const isLastQuestion = currentQuestionIndex + 1 === filteredQuestions.length;
  const questionType = filteredQuestions[currentQuestionIndex].type;
  const questionPick = filteredQuestions[currentQuestionIndex].pick;

  return {
    index: currentQuestionIndex,
    text: questionText,
    serial: questionSerial,
    type: questionType,
    pick: questionPick,
    lastQuestion: isLastQuestion
  };
};

export default questionProperties;
