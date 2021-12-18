var numDecodings = function (s) {
  let decoding = [];
  // generate decoding pattern
  for (let i = 1; i <= 26; i++) {
    decoding.push(i.toString());
  }

  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i <= s.length; i++) {
    for (let code of decoding) {
      if (s.slice(i, i + code.length) === code) {
        dp[i + code.length] += dp[i];
      }
    }
  }
  return dp[s.length];
};