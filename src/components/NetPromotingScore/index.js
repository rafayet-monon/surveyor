import React, { useState } from 'react';

const NetPromotingScore = ({ start, end }) => {
  const [hover, setHover] = useState(null);
  const startScore = start || 1;
  const endScore = end || 10;
  const [nps, setNps] = useState(Math.ceil((startScore + endScore) / 2));
  const scoreElements = Array.from(
    { length: endScore - startScore + 1 },
    (v, k) => k + startScore
  );

  return (
    <div className="np-score">
      <div className="np-score__number-container">
        { scoreElements.map((score, index) => {
          const ratingValue = index + 1;

          return (
            <label
              key={ index }
              className={
                ratingValue === scoreElements.length
                  ? 'np-score__number-label np-score__number-label--no-border'
                  : 'np-score__number-label'
              }
            >
              <input
                type="radio"
                className="np-score__radio"
                value={ score }
                onClick={ () => setNps(score) }
              />

              <p
                className={
                  ratingValue <= (hover || nps)
                    ? 'np-score__number np-score__number--selected'
                    : 'np-score__number'
                }
                onMouseEnter={ () => setHover(score) }
                onMouseLeave={ () => setHover(null) }
              >
                { score }
              </p>
            </label>
          );
        }) }
        <div className="np-score__identifier">
          <div className="np-score__low-score">
            <p>Not at all Likely</p>
          </div>
          <div className="np-score__high-score">
            <p>Extremely Likely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetPromotingScore;
