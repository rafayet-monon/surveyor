import React, { useState } from 'react';

const NetPromotingScore = ({ start, end }) => {
  const startScore = start || 1;
  const endScore = end || 10;
  const [nps, setNps] = useState(Math.ceil((startScore + endScore) / 2));
  const scoreElements = Array.from(
    { length: endScore - startScore + 1 },
    (v, k) => k + startScore
  );

  return (
    <div className="np-score">
      <ul className="np-score__number-container">
        { scoreElements.map((score, index) => {
          const ratingValue = index + 1;

          return (

          <li
            role="presentation"
            key={ index }
            className={
              ratingValue === scoreElements.length
                ? 'np-score__number-label np-score__number-label--no-border'
                : 'np-score__number-label'
            }
            onClick={ () => setNps(score) }
            onKeyDown={ () => setNps(score) }
          >
            <p
              className={
                ratingValue <= nps
                  ? 'np-score__number np-score__number--selected'
                  : 'np-score__number'
              }
            >
              { score }
            </p>
          </li>
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
      </ul>
    </div>
  );
};

export default NetPromotingScore;
