import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('filterQuestionList', () => {
  it('filters out intro and outro type object from list', () => {
    const builtQuestionList = buildQuestionList(SurveyDetailResponse)
    const filteredQuestions = filterQuestionList(builtQuestionList)

    const intro = filteredQuestions.find(question => question.type === 'intro');
    const outro = filteredQuestions.find(question => question.type === 'outro');

    expect(intro).toBeUndefined();
    expect(outro).toBeUndefined();
  });
});
