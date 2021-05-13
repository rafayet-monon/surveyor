import React from 'react';

const SurveyTextAreaField = () => {
  return (
    <div className="survey-input-container">
      <textarea className="input input--textarea" rows="5" data-test-id="survey-texarea" />
    </div>
  );
};

export default SurveyTextAreaField;
