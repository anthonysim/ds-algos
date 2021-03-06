function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
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
  return left;
};