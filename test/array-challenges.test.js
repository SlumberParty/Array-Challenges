const removeDuplicates = require('../challenges/remove-duplicates');
const intersection = require('../challenges/intersection');

describe('array functions', () => {
  it('removes duplicates', () => {
    const arr = [3, 3, 5, 3, 12, 7];
    const remove = removeDuplicates(arr);

    expect(remove).toEqual([3, 5, 12, 7]);
  });
  it('find the intersection of two arrays', () => {
    const arrOne = [2, 2, 4, 1];
    const arrTwo = [1, 2, 0, 2];
    const makeOne = intersection(arrOne, arrTwo);
    
    expect(makeOne).toEqual([2, 1]);
  });
});
