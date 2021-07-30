function searchInsert(nums, target) {
  if (nums[0] === target) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let guess = nums[mid];

    if (guess < target) {
      left = mid + 1;
    } else if (guess > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] <= 0) {
      return i;
    }
  }
  return nums.length;
};