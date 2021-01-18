import React, { useContext, useState } from 'react';

import { DetailsContext } from 'contexts/details';
import closeIcon from 'images/close-button-white.svg';
import nextIcon from 'images/next-button-black.svg';
import DetermineQuestionType from 'screens/SurveyDetail/determineQuestionType';
import filterQuestionList from 'screens/SurveyDetail/filterQuestionList';

const Questions = () => {
  const detailsContext = useContext(DetailsContext);
  const filteredQuestions = filterQuestionList(detailsContext.questionList);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionText = filteredQuestions[currentQuestionIndex].text;

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
            { currentQuestionIndex + 1 }/{ filteredQuestions.length }
          </div>
          <h1 className="questions__title"> { questionText } </h1>
          <DetermineQuestionType
            type={ filteredQuestions[currentQuestionIndex].type }
            pick={ filteredQuestions[currentQuestionIndex].pick }
          />
        </div>
      </div>

      { /*Show the submit button if it is the last question otherwise the next buttons*/ }
      <div className="questions__footer">
        { currentQuestionIndex + 1 === filteredQuestions.length ? (
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
