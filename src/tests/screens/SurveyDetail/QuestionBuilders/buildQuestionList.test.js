import buildQuestionList from 'screens/SurveyDetail/QuestionBuilders/buildQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('buildQuestionList', () => {
  it('builds simplified question list with attributes and answers', () => {
    const builtQuestionList = buildQuestionList(SurveyDetailResponse)

    let questions = SurveyDetailResponse.data.relationships.questions.data;
    const included = SurveyDetailResponse.included;

    questions.forEach((question) => {
      const question_details = included.find(
        (details) => details.id === question.id
      );

      question['type'] = question_details.attributes.display_type;
      question['pick'] = question_details.attributes.pick;
      question['text'] = question_details.attributes.text;
      question['answers'] = question_details.relationships.answers.data;
    });

    expect(builtQuestionList).toEqual(questions)
  });
});
