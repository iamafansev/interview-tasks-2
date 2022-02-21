/*
  Проверить присутствуют ли дубликаты чисел в массиве.

  Input: nums = [4, 9, 2, 0, 1]
  Output: false

  Input: nums = [4, 9, 2, 4, 1]
  Output: true
*/

const containsDuplicate = (nums = []) => {
  const uniqueNums = new Set(nums);
  return uniqueNums.size < nums.length;
};

export default containsDuplicate;
