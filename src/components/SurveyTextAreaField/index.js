import React, { useContext, useEffect, useState } from 'react';

import * as Constants from 'constants/surveyAnswer';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';

const SurveyTextAreaField = ({ answers, questionId }) => {
  const [value, setValue] = useState('');
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId);
  const { dispatch } = useContext(SurveyAnswerContext);

  useEffect(() => {
    if (currentQuestionId === questionId && value) {
      const answerId = answers[0].id;
      dispatch({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(questionId, answerId, value)
      });
    } else {
      setValue('');
      setCurrentQuestionId(questionId);
    }
  }, [questionId, value]);

  return (
    <div className="survey-input-container">
      <textarea
        className="input input--textarea"
        rows="5"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        data-test-id="survey-texarea"
      />
    </div>
  );
};

export default SurveyTextAreaField;
