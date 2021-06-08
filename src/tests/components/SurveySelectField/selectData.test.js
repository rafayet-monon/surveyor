import SelectData from 'components/SurveySelectField/selectData';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponseTwo.json';

describe('selectData', () => {
  it('builds options for dropdown', () => {
    const details = SurveyDetailResponse;
    const questionList = buildQuestionList(SurveyDetailResponse);
    const filteredQuestions = filterQuestionList(questionList);
    const question = filteredQuestions[0];
    const answers = question.answers;

    const expectedOptions = [
      { label: 'Asoke', value: 'c929621b5857bf4e4196' },
      { label: 'Chaeng Wattana', value: '6bfa792ab02a591efc79' },
      { label: 'Ekamai', value: '1d78c896f194835ec7b9' },
      { label: 'Manutham', value: '45e77eea34c5550bfdee' },
      { label: 'Pattaya', value: '5b7e1aed424c823d15ef' },
      { label: 'Pinklao', value: 'a3b328d04453d698747a' },
      { label: 'Rama II', value: '0eb659d4f59ff09a9766' },
      { label: 'Srinakarin', value: '2907139a43db7f92b028' }
    ];

    const selectOptions = SelectData(details, answers);

    expect(expectedOptions).toEqual(selectOptions);
  });
});
