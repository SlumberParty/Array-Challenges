const removeDuplicates = require('../challenges/remove-duplicates');

describe('array functions', () => {
  it('removes duplicates', () => {
    const arr = [3, 3, 5, 3, 12, 7];
    const remove = removeDuplicates(arr);

    expect(remove).toEqual([3, 5, 12, 7]);
  });
});
