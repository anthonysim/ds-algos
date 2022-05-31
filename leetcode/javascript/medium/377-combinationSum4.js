var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[dp.length - 1];
};

// Time Complexity: O(N * M)
// Space Complexity: O(N * M)

// Notes: basically adding backwards
// 1 - 1 =  0 >= 0 true
// 1 - 2 = -1 >= 0 false
// 1 - 3 = -2 >= 0 false

// 2 - 1 =  1 >= 0 true
// 2 - 2 =  0 >= 0 true
// 2 - 3 = -1 >= 0 false

// 3 - 1 = 2 >= 0 true
// 3 - 2 = 1 >= 0 true
// 3 - 3 = 0 >= 0 true

// 4 - 1 = 3 >= 0 true
// 4 - 2 = 2 >= 0 true
// 4 - 3 = 1 >= 0 true

// dp = [1, 0, 0, 0, 0];
// dp = [1, 1, 0, 0, 0];
// dp = [1, 1, 2, 0, 0];
// dp = [1, 1, 2, 4, 7];
// ----------------------
// dp = [1, 1, 2, 4, 7];
