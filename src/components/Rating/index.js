import React, { useState } from 'react';

const Rating = ({ initialRating, maxRating, ratingEmoji }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);
  const emojiElements = [...Array(maxRating || 5)];

  let emoji;
  switch (ratingEmoji) {
    case 'heart': {
      emoji = '❤️';

      break;
    }
    case 'smiley': {
      emoji = '🙂';

      break;
    }
    case 'star': {
      emoji = '⭐';

      break;
    }
    case 'money': {
      emoji = '💰';

      break;
    }
    default: {
      emoji = '👍🏻';
    }
  }

  return (
    <div className="rating">
      { emojiElements.map((_key, index) => {
        const ratingValue = index + 1;

        return (
          <label key={ index }>
            <input
              type="radio"
              className="rating__radio"
              value={ ratingValue }
              onClick={ () => setRating(ratingValue) }
            />
            <span
              role="img"
              aria-label="emoji"
              className={
                ratingValue <= (hover || rating)
                  ? 'rating__emoji rating__emoji--selected'
                  : 'rating__emoji'
              }
              onMouseEnter={ () => setHover(ratingValue) }
              onMouseLeave={ () => setHover(null) }
            >
              { emoji }
            </span>
          </label>
        );
      }) }
    </div>
  );
};

export default Rating;
