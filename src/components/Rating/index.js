import React, { useState } from 'react';

const Rating = ({ initialRating, maxRating, ratingEmoji }) => {
  const [rating, setRating] = useState(initialRating);
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
