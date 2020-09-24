import React from 'react';

const BlankSlate = () => {
  return (
    <div className="blank-slate">
      <span
        role="img"
        aria-label="sunglass-emoji"
        className="blank-slate__emoji"
      >
        😎
      </span>
      <h3 className="blank-slate__message">You’ve completed all the survey.</h3>
      <h3 className="blank-slate__message">Take a moment.</h3>
    </div>
  );
};

export default BlankSlate;
