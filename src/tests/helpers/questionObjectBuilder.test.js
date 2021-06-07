import QuestionObjectBuilder from 'helpers/questionObjectBuilder';

describe('questionObjectBuilder', () => {
  it('builds the question object with answer', () => {
    const questionId = '123';
    const answerId = 'abc';
    const object = QuestionObjectBuilder(questionId, answerId);

    expect(object).toEqual({
      id: questionId,
      answers: [
        {
          id: answerId
        }
      ]
    });
  });
});
