function minSubArrayLen(k, nums) {
  let sum = 0;
  let start = 0;
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= k) {
      min = Math.min(min, i - start + 1);
      sum -= nums[start];
      start += 1;
    }
  }
  return min === Infinity ? 0 : min;
};