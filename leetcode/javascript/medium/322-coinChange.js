var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < dp.length; i++) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};

console.log(coinChange([1, 2, 5], 11)); // 3