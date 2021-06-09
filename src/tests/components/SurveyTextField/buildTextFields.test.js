import BuildTextFields from 'components/SurveyTextField/buildTextFields';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('selectOptions', () => {
  it('builds options for wheel select', () => {
    const details = SurveyDetailResponse;
    const questionList = buildQuestionList(SurveyDetailResponse);
    const filteredQuestions = filterQuestionList(questionList);
    const question = filteredQuestions[9];
    const fields = [
      {
        id: '491d49dd6b8174456acf',
        type: 'answer',
        placeholder: 'First Name'
      },
      {
        id: '6db6dcae1a6c6644d723',
        type: 'answer',
        placeholder: 'Mobile No.'
      },
      { id: '575db8c074601994bde3',
        type: 'answer',
        placeholder: 'Email ' }
    ];
    const buildOptions = BuildTextFields(details, question.answers);

    expect(buildOptions).toEqual(fields);
  });
});
