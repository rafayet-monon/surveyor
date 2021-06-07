import SelectEmoji from 'components/Rating/selectEmoji';

describe('selectEmoji', () => {
  describe('given an emoji name', () => {
    it('returns the emoji associated with the name', () => {
      const emojiName = 'star';
      const emoji = '⭐';

      const ratingEmoji = SelectEmoji(emojiName);

      expect(ratingEmoji).toEqual(emoji);
    });

    describe('given an emoji associated with the name does not exist', () => {
      it('returns the default emoji', () => {
        const undefinedEmoji = 'leg';
        const defaultEmoji = '👍🏻';

        const ratingEmoji = SelectEmoji(undefinedEmoji);

        expect(ratingEmoji).toEqual(defaultEmoji);
      });
    });
  });

  describe('given no emoji', () => {
    it('returns the default emoji', () => {
      const defaultEmoji = '👍🏻';

      const ratingEmoji = SelectEmoji();

      expect(ratingEmoji).toEqual(defaultEmoji);
    });
  });
});
