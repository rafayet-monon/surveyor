import React from 'react';

import WheelSelect from 'components/WheelSelect';
import closeIcon from 'images/close-button-white.svg';
import nextIcon from 'images/next-button-black.svg';

const Questions = () => {
  const question = 'How fulfilled did you feel during this WFH period?';
  const data = [
    {
      display: 'Very fulfilled',
      value: 0
    },
    {
      display: 'Somewhat fulfilled',
      value: 1
    },
    {
      display: 'Unfulfilled',
      value: 1
    }
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
          <WheelSelect data={ data } multipleSelect={ true } />
        </div>
      </div>

      <div className="questions__footer">
        <div
          className="questions__next-question"
          role="presentation"
        >
          <img src={ nextIcon } alt="next question" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
