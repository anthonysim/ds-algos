function canJump(nums) {
  let goal = nums.length - 1;

  for (let i = goal; i >= 0; i--) {
    // shifts the "goal" to the left if the condition is true
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal === 0 ? true : false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false