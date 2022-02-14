function longestCommonSubsequence(text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // if the chars from text1 and text2 are NOT equalled to each other
      // get the max of either the number on top or to the left.
      if (text1.charAt(i - 1) !== text2.charAt(j - 1)) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        // if the chars from text1 and text2 are equalled to each other
        // take the number that's above and to the left plus 1
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  return dp[n][m];
};

console.log(longestCommonSubsequence("abcde", "abc")); // 3

