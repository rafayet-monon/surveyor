import * as Constants from 'constants/surveyAnswer';
import SurveyAnswerReducer from 'reducers/surveyAnswer';

describe('surveyAnswer', () => {
  describe('given data with SINGLE_ANSWER type', () => {
    describe('given the question does not exist in the state', () => {
      it('adds question and answer', () => {
        const initialState = { survey_id: 'surveyId', questions: [] };
        const action = {
          type: 'SINGLE_ANSWER',
          data: {
            id: 'questionId',
            answers: [{ id: 'answerId' }]
          }
        };
        const finalState = {
          survey_id: 'surveyId',
          questions: [
            {
              id: 'questionId',
              answers: [{ id: 'answerId' }]
            }
          ]
        };
        const reducer = SurveyAnswerReducer(initialState, action);

        expect(reducer).toEqual(finalState);
      });
    });

    describe('given the question exists in the state', () => {
      it('adds the answer to the existing question', () => {
        const initialState = {
          survey_id: 'surveyId',
          questions: [
            {
              id: 'questionId',
              answers: [{ id: 'answerId' }]
            }
          ]
        };
        const action = {
          type: 'SINGLE_ANSWER',
          data: {
            id: 'questionId',
            answers: [{ id: 'answerIdNew' }]
          }
        };
        const finalState = {
          survey_id: 'surveyId',
          questions: [
            {
              id: 'questionId',
              answers: [{ id: 'answerIdNew' }]
            }
          ]
        };
        const reducer = SurveyAnswerReducer(initialState, action);

        expect(reducer).toEqual(finalState);
      });
    });
  });

  describe('given data with MULTIPLE_ANSWER type', () => {
    describe('given the question does not exist in the state', () => {
      it('adds question and answer', () => {
        const initialState = { survey_id: 'surveyId', questions: [] };
        const action = {
          type: Constants.MULTIPLE_ANSWER,
          data: {
            id: 'questionId',
            answers: [{ id: 'answerId' }]
          }
        };
        const finalState = {
          survey_id: 'surveyId',
          questions: [
            {
              id: 'questionId',
              answers: [{ id: 'answerId' }]
            }
          ]
        };
        const reducer = SurveyAnswerReducer(initialState, action);

        expect(reducer).toEqual(finalState);
      });
    });

    describe('given the question exists in the state', () => {
      describe('given a new answer', () => {
        it('adds the answer to the state', () => {
          const initialState = {
            survey_id: 'surveyId',
            questions: [
              {
                id: 'questionId',
                answers: [{ id: 'answerId1' }]
              }
            ]
          };
          const action = {
            type: Constants.MULTIPLE_ANSWER,
            data: {
              id: 'questionId',
              answers: [{ id: 'answerId2' }]
            }
          };
          const finalState = {
            survey_id: 'surveyId',
            questions: [
              {
                id: 'questionId',
                answers: [{ id: 'answerId1' }, { id: 'answerId2' }]
              }
            ]
          };
          const reducer = SurveyAnswerReducer(initialState, action);

          expect(reducer).toEqual(finalState);
        });
      });

      describe('given an existing answer', () => {
        it('removes the answer from the state', () => {
          const initialState = {
            survey_id: 'surveyId',
            questions: [
              {
                id: 'questionId',
                answers: [{ id: 'answerId1' }, { id: 'answerId2' }]
              }
            ]
          };
          const action = {
            type: Constants.MULTIPLE_ANSWER,
            data: {
              id: 'questionId',
              answers: [{ id: 'answerId2' }]
            }
          };
          const finalState = {
            survey_id: 'surveyId',
            questions: [
              {
                id: 'questionId',
                answers: [{ id: 'answerId1' }]
              }
            ]
          };
          const reducer = SurveyAnswerReducer(initialState, action);

          expect(reducer).toEqual(finalState);
        });
      });
    });
  });
});
