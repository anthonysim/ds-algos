var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = 0; i < dp.length; i++) {
      if (i >= coin) {
        dp[i] += dp[i - coin];
      }
    }
  }
  return dp[dp.length - 1];
};