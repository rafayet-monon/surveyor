import buildQuestionList from 'helpers/buildQuestionList';
import filterQuestionList from 'helpers/filterQuestionList';
import questionProperties from 'helpers/questionProperties';
import SurveyDetailResponse from 'tests/fixtures/surveyDetailResponse.json';

describe('questionProperties', () => {
  it('builds question properties to display', () => {
    const currentQuestionIndex = 0;
    const builtQuestionList = buildQuestionList(SurveyDetailResponse);
    const filteredQuestions = filterQuestionList(builtQuestionList);
    const properties = questionProperties(
      filteredQuestions,
      currentQuestionIndex
    );

    const questionText = filteredQuestions[currentQuestionIndex].text;
    const questionSerial = `${currentQuestionIndex + 1} / ${
      filteredQuestions.length
    }`;
    const isLastQuestion =
      currentQuestionIndex + 1 === filteredQuestions.length;
    const questionType = filteredQuestions[currentQuestionIndex].type;
    const questionPick = filteredQuestions[currentQuestionIndex].pick;

    expect(properties.text).toEqual(questionText);
    expect(properties.serial).toEqual(questionSerial);
    expect(properties.lastQuestion).toEqual(isLastQuestion);
    expect(properties.type).toEqual(questionType);
    expect(properties.pick).toEqual(questionPick);
  });
});
