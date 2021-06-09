import React, { useContext, useEffect, useState } from 'react';

import BuildTextFields from 'components/SurveyTextField/buildTextFields';
import * as Constants from 'constants/surveyAnswer';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';

const SurveyTextField = ({ answers, questionId }) => {
  const detailsContext = useContext(DetailsContext);
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId);
  const { dispatch } = useContext(SurveyAnswerContext);
  const [fieldData, setFieldData] = useState([]);

  useEffect(() => {
    setFieldData(BuildTextFields(detailsContext.surveyDetail, answers));

    if (currentQuestionId !== questionId) {
      setFieldData([]);
      setCurrentQuestionId(questionId);
    }
  }, [questionId]);

  const dispatchData = (value, answerId) => {
    dispatch({
      type: Constants.MULTIPLE_ANSWER,
      data: QuestionObjectBuilder(questionId, answerId, value)
    });
  };

  const setFieldValue = () => {
    if (currentQuestionId !== questionId) {
      return '';
    }
  };

  return (
    <div className="survey-input-container" data-test-id="survey-textfield">
      { fieldData.map(function (element, index) {
        return (
          <input
            key={ index }
            className="input input--text survey-input-container__text-field"
            placeholder={ element.placeholder }
            value={ setFieldValue() }
            onChange={ (e) => dispatchData(e.target.value, element.id) }
            data-test-id="survey-textfield-input"
          />
        );
      })
      }
    </div>
  );
};

export default SurveyTextField;
