// Based on the question type we are determining and showing components
import React, { useEffect, useState } from 'react';

import NetPromotingScore from 'components/NetPromotingScore';
import Rating from 'components/Rating';
import SurveySelectField from 'components/SurveySelectField';
import SurveyTextAreaField from 'components/SurveyTextAreaField';
import SurveyTextField from 'components/SurveyTextField';
import WheelSelect from 'components/WheelSelect';

const DetermineQuestionType = ({ question }) => {
  const [questionType, setQuestionType] = useState(question.type);

  const [questionComponent, setQuestionComponent] = useState(null);
  useEffect(() => {
    if (question.type !== questionType) {
      setQuestionType(question.type);
    }

    switch (questionType) {
      case 'heart':
      case 'money':
      case 'smiley':
      case 'star':
      case 'thumb': {
        setQuestionComponent(
          <Rating
            ratingEmoji={ questionType }
            answers={ question.answers }
            questionId={ question.id }
          />
        );

        break;
      }
      case 'nps': {
        setQuestionComponent(
          <NetPromotingScore
            answers={ question.answers }
            questionId={ question.id }
          />
        );

        break;
      }
      case 'textarea': {
        setQuestionComponent(
          <SurveyTextAreaField
            answers={ question.answers }
            questionId={ question.id }
          />
        );

        break;
      }
      case 'textfield': {
        setQuestionComponent(
          <SurveyTextField
            answers={ question.answers }
            questionId={ question.id }
          />
        );

        break;
      }
      case 'choice': {
        const multipleChoice = question.pick === 'any';
        setQuestionComponent(
          <WheelSelect
            multipleSelect={ multipleChoice }
            answers={ question.answers }
            questionId={ question.id }
          />
        );

        break;
      }
      case 'dropdown': {
        setQuestionComponent(
          <SurveySelectField
            answers={ question.answers }
            questionId={ question.id }
          />
        );

        break;
      }
      default: {
        setQuestionComponent(null);
      }
    }
  }, [question.answers, question.pick, question.type, questionType]);

  return <React.Fragment> { questionComponent } </React.Fragment>;
};

export default DetermineQuestionType;
