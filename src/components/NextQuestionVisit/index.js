import React, { useContext } from 'react';

import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import nextIcon from 'images/next-button-black.svg';

const NextQuestionVisit = ({ questionId, nextQuestion }) => {
  const answerContext = useContext(SurveyAnswerContext)
  const answerObject = answerContext.state.questions.find(obj => obj.id === questionId);

  const answerSelected = () => {
    if (answerObject && answerObject.answers.length !== 0) {
      nextQuestion()
    } else {
      return false;
    }
  }

  return(
    <React.Fragment>
      <div
        className="questions__next-question"
        role="presentation"
        onClick={ answerSelected }
        data-test-id="next-question"
      >
        <img src={ nextIcon } alt="next question" />
      </div>
    </React.Fragment>
  )
}

export default NextQuestionVisit;
