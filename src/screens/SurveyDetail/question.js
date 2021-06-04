import React, { useContext, useState } from 'react';

import DetermineQuestionType from 'components/DetermineQuestionType';
import NextQuestionVisit from 'components/NextQuestionVisit';
import QuitSurvey from 'components/QuitSurvey';
import SurveyOutro from 'components/SurveyOutro';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerProvider } from 'contexts/surveyAnswer';
import filterQuestionList from 'helpers/filterQuestionList';
import questionProperties from 'helpers/questionProperties';

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
    <SurveyAnswerProvider surveyId={ detailsContext.surveyDetail.data.id }>
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
          <DetermineQuestionType question={ filteredQuestions[currentQuestion.index] } />
        </div>
      </div>

          { /*Show the submit button if it is the last question otherwise the next buttons*/ }
          <div className="questions__footer">
            { currentQuestion.lastQuestion ? (
              <button
                type="submit"
                className="button button--primary questions__submit"
                onClick={ submitSurvey }
                data-test-id="submit-survey"
              >
                Submit
              </button>
            ) : (
              <NextQuestionVisit nextQuestion={ nextQuestion } questionId={ currentQuestion.id } />
            ) }
          </div>
        </div>
      ) }
    </SurveyAnswerProvider>
  );
};

export default Questions;
