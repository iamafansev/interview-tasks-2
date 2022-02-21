import containsDuplicate from '../src/containsDuplicate';

test('containsDuplicate', () => {
  const actual1 = containsDuplicate([1, '1', 2, 3, 4]);
  expect(actual1).toBe(false);

  const actual2 = containsDuplicate([1, 2, 1, 1, 3, 4]);
  expect(actual2).toBe(true);

  const actual3 = containsDuplicate([]);
  expect(actual3).toBe(false);

  expect(() => containsDuplicate(1)).toThrow();
  expect(() => containsDuplicate(null)).toThrow();
});
