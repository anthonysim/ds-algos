var sortedSquares = function (nums) {
  let result = nums.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
  return result;
};