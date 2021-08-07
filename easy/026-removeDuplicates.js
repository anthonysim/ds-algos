// basically don't save in new arr/new memory, use the original array.
function removeDuplicates(nums) {
  let numCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[numCount] = nums[i];
      numCount += 1;
    }
  }
  return numCount;
}