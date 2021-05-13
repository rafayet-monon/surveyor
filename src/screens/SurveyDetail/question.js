import React, { useContext, useState } from 'react';

import DetermineQuestionType from 'components/DetermineQuestionType';
import { DetailsContext } from 'contexts/details';
import filterQuestionList from 'helpers/filterQuestionList';
import questionProperties from 'helpers/questionProperties';
import nextIcon from 'images/next-button-black.svg';
import QuitSurvey from 'screens/SurveyDetail/quitSurvey';
import SurveyOutro from 'screens/SurveyDetail/surveyOutro';

const Questions = () => {
  const detailsContext = useContext(DetailsContext);
  const filteredQuestions = filterQuestionList(detailsContext.questionList);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionProperties(filteredQuestions, 0)
  );
  const [submitted, setSubmitted] = useState(false);
  const outroText = detailsContext.questionList.find(
    (question) => question.type === 'outro'
  ).text;

  const nextQuestion = () => {
    setCurrentQuestion(
      questionProperties(filteredQuestions, currentQuestion.index + 1)
    );
  };

  const submitSurvey = () => {
    setSubmitted(true);
  };

  return (
    <React.Fragment>
      { submitted ? (
        <SurveyOutro message={ outroText } />
      ) : (
        <div className="questions">
          <div className="questions__header">
            <div className="questions__quit-survey">
              <QuitSurvey />
            </div>
          </div>

      <div className="questions__container">
        <div className="questions__details">
          <div className="questions__number">
            { currentQuestion.serial }
          </div>
          <h1 className="questions__title">
            { currentQuestion.text }
          </h1>
          <DetermineQuestionType
            type={ currentQuestion.type }
            pick={ currentQuestion.pick }
          />
        </div>
      </div>

          { /*Show the submit button if it is the last question otherwise the next buttons*/ }
          <div className="questions__footer">
            { currentQuestion.lastQuestion ? (
              <button
                type="submit"
                className="button button--primary questions__submit"
                onClick={ submitSurvey }
              >
                Submit
              </button>
            ) : (
              <div
                className="questions__next-question"
                role="presentation"
                onClick={ nextQuestion }
              >
                <img src={ nextIcon } alt="next question" />
              </div>
            ) }
          </div>
        </div>
      ) }
    </React.Fragment>
  );
};

export default Questions;
