var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let index = Math.floor((left + right) / 2);

    if (nums[index] < target) {
      left = index + 1;
    } else if (nums[index] > target) {
      right = index - 1;
    } else {
      return index;
    }
  }
  return -1;
};