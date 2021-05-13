import buildQuestionList from 'screens/SurveyDetail/QuestionBuilders/buildQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('buildQuestionList', () => {
  it('builds simplified question list with attributes and answers', () => {
    const builtQuestionList = buildQuestionList(SurveyDetailResponse)

    let questions = SurveyDetailResponse.data.relationships.questions.data;
    const included = SurveyDetailResponse.included;

    questions.forEach((question, index) => {
      const question_details = included.find(
        (details) => details.id === question.id
      );

      questions[index]['type'] = question_details.attributes.display_type;
      questions[index]['pick'] = question_details.attributes.pick;
      questions[index]['text'] = question_details.attributes.text;
      questions[index]['answers'] = question_details.relationships.answers.data;
    });

    expect(builtQuestionList).toEqual(questions)
  });
});
