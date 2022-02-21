/*
  Учитывая массив, numsсодержащий nразличные числа в диапазоне [0, n],
  вернуть единственное число в диапазоне, отсутствующее в массиве.
*/

const missingNumber = (nums = []) => {
  const { length } = nums;
  const sum = (length * (length + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return sum - actualSum;
};

export default missingNumber;
