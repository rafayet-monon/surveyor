import React from 'react';

import SurveySelectField from 'components/SurveySelectField';
// import SurveyTextAreaField from 'components/SurveyTextAreaField';
// import SurveyTextField from 'components/SurveyTextField';
// import NetPromotingScore from 'components/NetPromotingScore';
// import ThumbRating from 'components/ThumbRating';
// import WheelSelect from 'components/WheelSelect';
import closeIcon from 'images/close-button-white.svg';
import nextIcon from 'images/next-button-black.svg';
const Questions = () => {
  const question = 'How fulfilled did you feel during this WFH period?';
  const options = [
    { name: 'Bangladesh', value: 'BD' },
    { name: 'India', value: 'IN' },
    { name: 'Nepal', value: 'NP' },
    { name: 'Bhutan', value: 'BH' },
    { name: 'Thailand', value: 'TH' },
    { name: 'Singapore', value: 'SG' },
    { name: 'Vietnam', value: 'VN' },
  ];

  return (
    <div className="questions">
      <div className="questions__header">
        <div className="questions__quit-survey">
          <img src={ closeIcon } alt="close" />
        </div>
      </div>

      <div className="questions__container">
        <div className="questions__details">
          <div className="questions__number">1/5</div>
          <h1 className="questions__title"> { question }</h1>
          <SurveySelectField options={ options } />
        </div>
      </div>

      <div className="questions__footer">
        <div className="questions__next-question" role="presentation">
          <img src={ nextIcon } alt="next question" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
