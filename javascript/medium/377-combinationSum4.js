var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (const n of nums) {
      if (i - n >= 0) {
        dp[i] += dp[i - n];
      }
    }
  }

  return dp[target];
};

// Notes: basically adding backwards
// example i = 4, n = 1, 2, 3
// 4 - 1 = 3
// 4 - 2 = 2
// 4 - 3 = 1

// 7 = nums[3] + nums[2] + nums[1];

// dp = [1, 0, 0, 0, 0];
// dp = [1, 1, 0, 0, 0];
// dp = [1, 1, 2, 0, 0];
// dp = [1, 1, 2, 4, 0];

// ----------------------
// dp = [1, 1, 2, 4, 6];
