import React, { useContext, useEffect, useState } from 'react';


import SelectEmoji from 'components/Rating/selectEmoji';
import * as Constants from 'constants/surveyAnswer';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';

const Rating = ({ maxRating, ratingEmoji, questionId, answers
                }) => {
  const { dispatch } = useContext(SurveyAnswerContext);
  const [rating, setRating] = useState();
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId);
  const emojiElements = [...Array(maxRating || 5)];

  let emoji = SelectEmoji(ratingEmoji);

  // Checking if the question changed. If not changed and  answer is given then
  // build the question object with answer and add to the SurveyAnswerContext
  // If changed then re-initialize the state. This state re-initialization is
  // necessary because there might be two or more same type of question back to
  // back.
  useEffect(() => {
    if (currentQuestionId === questionId && rating) {
      const answerId = answers[rating - 1].id;
      dispatch({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(questionId, answerId)
      });
    } else {
      setRating();
      setCurrentQuestionId(questionId);
    }
  }, [questionId, rating]);

  return (
    <div className="rating">
      <ul className="rating__list" data-test-id="rating-list">
        { emojiElements.map((_key, index) => {
          const ratingValue = index + 1;

          return (
            <li
              role="presentation"
              key={ index }
              className={
                ratingValue <= rating
                  ? 'rating__emoji rating__emoji--selected'
                  : 'rating__emoji'
              }
              onClick={ () => setRating(ratingValue) }
              onKeyDown={ () => setRating(ratingValue) }
            >
              { emoji }
            </li>
          );
        }) }
      </ul>
    </div>
  );
};

export default Rating;
