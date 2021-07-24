var maxSubArray = function (nums) {
  let prev = 0;
  let max = -Infinity;

  for (let num of nums) {
    prev = Math.max(prev + num, num);
    max = Math.max(prev, max);
  }
  return max;
};

console.log(maxSubArray([-1])) //6