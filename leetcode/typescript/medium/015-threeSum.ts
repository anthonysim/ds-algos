function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    let left: number = i + 1;
    let right: number = nums.length - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left += 1;
        while (nums[right] === nums[right - 1]) right -= 1;
        left += 1;
        right -= 1;
      } else if (total < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    while (nums[i] === nums[i + 1]) i += 1;
  }
  return res;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));