var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }

  let current = 0;
  while (true) {
    slow = nums[slow];
    current = nums[current];

    if (current === slow) break;
  }
  return slow;
};