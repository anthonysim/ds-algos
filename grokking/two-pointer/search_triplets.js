function search_triplets(nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let total = current + nums[left] + nums[right];

      if (total === 0) {
        res.push([current, nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) left += 1;
        while (nums[right - 1] === nums[right]) right -= 1;
        left += 1;
        right -= 1;
      } else if (total < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    while (nums[i + 1] === nums[i]) i += 1;
  }
  return res;
};
