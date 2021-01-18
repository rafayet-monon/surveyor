// Filter out intro and outro from the questionList leaving only the survey
// questions
const filterQuestionList = (questions) => {
  questions = questions.filter((question) => question.type !== 'intro');
  questions = questions.filter((question) => question.type !== 'outro');

  return questions;
};

export default filterQuestionList;
