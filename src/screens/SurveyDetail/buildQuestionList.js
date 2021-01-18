// Build question list and answers from the api for easier of question and
// answers across the components
const BuildQuestionList = (details) => {
  let questions = details.data.relationships.questions.data;
  const included = details.included;

  questions.forEach((question, index) => {
    const question_details = included.find(
      (details) => details.id === question.id
    );

    questions[index]['type'] = question_details.attributes.display_type;
    questions[index]['pick'] = question_details.attributes.pick;
    questions[index]['text'] = question_details.attributes.text;
    questions[index]['answers'] = question_details.relationships.answers.data;
  });

  return questions;
};

export default BuildQuestionList;
