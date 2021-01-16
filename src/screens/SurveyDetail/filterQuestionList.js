const filterQuestionList = (questions) => {
  questions = questions.filter((question) => question.type !== 'intro');
  questions = questions.filter((question) => question.type !== 'outro');

  return questions;
};

export default filterQuestionList;
