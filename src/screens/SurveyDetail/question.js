import React, { useContext, useState } from 'react';

import { DetailsContext } from 'contexts/details';
import closeIcon from 'images/close-button-white.svg';
import nextIcon from 'images/next-button-black.svg';
import DetermineQuestionType from 'screens/SurveyDetail/determineQuestionType';
import filterQuestionList from 'screens/SurveyDetail/filterQuestionList';
import questionProperties from 'screens/SurveyDetail/questionProperties';

const Questions = () => {
  const detailsContext = useContext(DetailsContext);
  const filteredQuestions = filterQuestionList(detailsContext.questionList);
  const [currentQuestionProperties, setCurrentQuestionProperties] = useState(questionProperties(filteredQuestions, 0));

  const nextQuestion = () => {
    setCurrentQuestionProperties(questionProperties(filteredQuestions, currentQuestionProperties.index + 1))
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
            { currentQuestionProperties.serial }
          </div>
          <h1 className="questions__title"> { currentQuestionProperties.text } </h1>
          <DetermineQuestionType
            type={ currentQuestionProperties.type }
            pick={ currentQuestionProperties.pick }
          />
        </div>
      </div>

      { /*Show the submit button if it is the last question otherwise the next buttons*/ }
      <div className="questions__footer">
        { currentQuestionProperties.lastQuestion ? (
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
