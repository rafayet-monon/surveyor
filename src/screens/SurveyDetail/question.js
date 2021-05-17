import React, { useContext, useState } from 'react';

import { DetailsContext } from 'contexts/details';
import closeIcon from 'images/close-button-white.svg';
import nextIcon from 'images/next-button-black.svg';
import DetermineQuestionType from 'screens/SurveyDetail/QuestionBuilders/determineQuestionType';
import filterQuestionList from 'screens/SurveyDetail/QuestionBuilders/filterQuestionList';
import questionProperties from 'screens/SurveyDetail/QuestionBuilders/questionProperties';

const Questions = () => {
  const detailsContext = useContext(DetailsContext);
  const filteredQuestions = filterQuestionList(detailsContext.questionList);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionProperties(filteredQuestions, 0)
  );

  const nextQuestion = () => {
    setCurrentQuestion(
      questionProperties(filteredQuestions, currentQuestion.index + 1)
    );
  };

  const submitSurvey = () => {
    console.log('submitted');
  };

  return (
    <div className="questions">
      <div className="questions__header">
        <div className="questions__quit-survey">
          <img src={ closeIcon } alt="close" />
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
  );
};

export default Questions;
