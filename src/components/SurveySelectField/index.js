import React, { useContext, useEffect, useState } from 'react';

import Select from 'react-select';

import SelectData from 'components/SurveySelectField/selectData';
import SelectStyles from 'components/SurveySelectField/selectStyles';
import * as Constants from 'constants/surveyAnswer';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';

const SurveySelectField = ({ questionId, answers }) => {
  const detailsContext = useContext(DetailsContext);
  const [selectData, setSelectData] = useState([]);
  const [selectValue, setSelectValue] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId);
  const { dispatch } = useContext(SurveyAnswerContext);

  useEffect(() => {
    setSelectData(SelectData(detailsContext.surveyDetail, answers));

    if (currentQuestionId === questionId && selectValue) {
      dispatch({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(questionId, selectValue)
      });
    } else {
      setCurrentQuestionId(questionId);
    }
  }, [selectValue]);

  return (
    <div className="survey-input-container" data-test-id="survey-dropdown">
      <Select
        onChange={ (option) => setSelectValue(option.value) }
        options={ selectData }
        styles={ SelectStyles }
      />
    </div>
  );
};

export default SurveySelectField;
