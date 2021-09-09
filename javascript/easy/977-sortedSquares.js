function sortedSquares(nums) {
  let res = nums.map(num => num * num).sort((a, b) => a - b);
  return res;
};