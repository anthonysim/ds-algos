function numDecodings(str: string): number {
  let decode = [];

  for (let i = 1; i <= 26; i++) {
    decode.push(i.toString());
  }

  let dp = new Array(str.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < dp.length; i++) {
    for (let code of decode) {
      if (str.slice(i, i + code.length) === code) {
        dp[i + code.length] += dp[i];
      }
    }
  }

  return dp[dp.length - 1];
};