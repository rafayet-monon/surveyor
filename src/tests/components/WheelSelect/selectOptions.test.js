import SelectOptions from 'components/WheelSelect/selectOptions';
import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('selectOptions', () => {
  it('builds options for wheel select', () => {
    const details = SurveyDetailResponse;
    const questionList = buildQuestionList(SurveyDetailResponse);
    const filteredQuestions = filterQuestionList(questionList);
    const question = filteredQuestions[6];
    const options = [
      { display: 'TripAdvisor', value: '002d338bc37f2142ad44' },
      { display: 'Newspaper/Magazine Story', value: 'bdf97897839888be159d' },
      { display: 'Website', value: '4ac9af2d4bc4a4dd6315' },
      { display: 'Social Media', value: '3fd673185845dce4aa7b' },
      { display: 'Staying at hotel', value: '20907898b2c2d68159c8' },
      { display: 'Walking by', value: '20c9187b64e9d3c36276' },
      { display: 'Other', value: '2051cda19e6940173c9f' }
    ];
    const buildOptions = SelectOptions(details, question.answers);

    expect(buildOptions).toEqual(options);
  });
});
