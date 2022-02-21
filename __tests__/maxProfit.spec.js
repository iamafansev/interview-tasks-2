import maxProfit from '../src/maxProfit';

test('maxProfit', () => {
  const actual1 = maxProfit([7, 1, 5, 3, 6, 4]);
  expect(actual1).toEqual(7);

  const actual2 = maxProfit([7, 6, 4, 3, 1]);
  expect(actual2).toEqual(0);

  const actual3 = maxProfit([]);
  expect(actual3).toEqual(0);
});
