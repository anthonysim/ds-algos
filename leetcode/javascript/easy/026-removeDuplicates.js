// basically don't save in new arr/new memory, use the original array.
function removeDuplicates(nums) {
  let left = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[left] = nums[i];
      left += 1;
    }
  }
  return left;
}