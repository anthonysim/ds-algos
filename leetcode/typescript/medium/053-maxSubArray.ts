function maxSubArray(nums: number[]): number {
  let prev: number = 0;
  let max: number = -Infinity;

  for (let num of nums) {
    prev = Math.max(num, prev + num);
    max = Math.max(max, prev);
  }

  return max;
};