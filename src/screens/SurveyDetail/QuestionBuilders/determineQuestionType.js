// Based on the question type we are determining and showing components
import React, { useEffect, useState } from 'react';

import NetPromotingScore from 'components/NetPromotingScore';
import Rating from 'components/Rating';
import SurveySelectField from 'components/SurveySelectField';
import SurveyTextAreaField from 'components/SurveyTextAreaField';
import SurveyTextField from 'components/SurveyTextField';
import MultipleWheelSelect from 'components/WheelSelect';

const DetermineQuestionType = ({ type, pick }) => {
  const [questionType, setQuestionType] = useState(type);

  const [questionComponent, setQuestionComponent] = useState(null);

  useEffect(() => {
    if (type !== questionType) {
      setQuestionType(type);
    }

    switch (questionType) {
      case 'heart':
      case 'smiley':
      case 'star':
      case 'money':
      case 'thumb': {
        setQuestionComponent(<Rating ratingEmoji={ questionType } />);

        break;
      }
      case 'nps': {
        setQuestionComponent(<NetPromotingScore />);

        break;
      }
      case 'textarea': {
        setQuestionComponent(<SurveyTextAreaField />);

        break;
      }
      case 'textfield': {
        setQuestionComponent(<SurveyTextField />);

        break;
      }
      case 'choice': {
        const multipleChoice = pick === 'any';
        setQuestionComponent(
          <MultipleWheelSelect data={ null } multipleSelect={ multipleChoice } />
        );

        break;
      }
      case 'dropdown': {
        setQuestionComponent(<SurveySelectField options={ null } />);

        break;
      }
      default: {
        setQuestionComponent(null);
      }
    }
  }, [pick, questionType, type]);

  return <React.Fragment> { questionComponent } </React.Fragment>;
};

export default DetermineQuestionType;
