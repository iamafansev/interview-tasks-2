import missingNumber from '../src/missingNumber';

test('missingNumber', () => {
  const actual1 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
  expect(actual1).toEqual(8);

  const actual2 = missingNumber([3, 0, 1]);
  expect(actual2).toEqual(2);
});
