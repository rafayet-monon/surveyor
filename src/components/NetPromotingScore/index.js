import React, { useContext, useEffect, useState } from 'react';

import * as Constants from 'constants/surveyAnswer';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';

const NetPromotingScore = ({ questionId, answers }) => {
  const [nps, setNps] = useState();
  const scoreElements = [...Array(11).keys()];
  const { dispatch } = useContext(SurveyAnswerContext);
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId);

  useEffect(() => {
    if (currentQuestionId === questionId && nps != null) {
      const answerId = answers[nps].id;
      dispatch({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(questionId, answerId)
      });
    } else {
      setNps();
      setCurrentQuestionId(questionId);
    }
  }, [questionId, nps]);

  return (
    <div className="np-score">
      <ul
        className="np-score__number-container"
        data-test-id="np-score-numbers"
      >
        { scoreElements.map((score, index) => {
          return (
            <li
              role="presentation"
              key={ index }
              className="np-score__number-label"
              onClick={ () => setNps(score) }
              onKeyDown={ () => setNps(score) }
            >
              <p
                className={
                  index <= nps
                    ? 'np-score__number np-score__number--selected'
                    : 'np-score__number'
                }
              >
                { score }
              </p>
            </li>
          );
        }) }
      </ul>

      <div className="np-score__identifier">
        <div className="np-score__low-score">
          <p>Not at all Likely</p>
        </div>
        <div className="np-score__high-score">
          <p>Extremely Likely</p>
        </div>
      </div>
    </div>
  );
};

export default NetPromotingScore;
