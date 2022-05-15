function canJump(nums: number[]): boolean {
  let goal: number = nums.length - 1;

  for (let i = goal; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }
  return goal === 0 ? true : false;
};