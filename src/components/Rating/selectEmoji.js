const SelectEmoji = (ratingEmoji) => {
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

  return emoji;
};

export default SelectEmoji;
