// Build question list and answers from the api for easier of question and
// answers across the components
const buildQuestionList = (details) => {
  let questions = details.data.relationships.questions.data;
  const included = details.included;

  questions.forEach((question) => {
    const question_details = included.find(
      (details) => details.id === question.id
    );

    question['type'] = question_details.attributes.display_type;
    question['pick'] = question_details.attributes.pick;
    question['text'] = question_details.attributes.text;
    question['answers'] = question_details.relationships.answers.data;
  });

  return questions;
};

export default buildQuestionList;
