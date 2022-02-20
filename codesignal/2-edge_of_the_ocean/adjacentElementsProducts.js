function solution(nums) {
  let pos = 0;
  let max = -Infinity;
  let total = 1;

  for (let i = 0; i < nums.length; i++) {
    total *= nums[i];

    if (i >= 1) {
      max = Math.max(total, max);
      nums[pos] === 0 ? 0 : total /= nums[pos];
      pos += 1;
    }
  }
  return max;
}
