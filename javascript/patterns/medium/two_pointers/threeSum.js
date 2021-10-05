function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = cur + nums[left] + nums[right];

      if (sum === 0) {
        res.push([cur, nums[left], nums[right]]);
        left += 1;
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }

    while (nums[i + 1] === nums[i]) {
      i += 1;
    }
  }
  return res;
};