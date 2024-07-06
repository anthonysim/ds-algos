var numDecodings = function (str) {
  const decode = new Array(26).fill().map((_, i) => (i + 1).toString());
  let dp = new Array(str.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < dp.length; i++) {

    for (let code of decode) {

      if (str.slice(i, i + code.length) === code) {
        dp[i + code.length] += dp[i];
      }
    }
  }
  return dp.at(-1);
};

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// [1, 0, 0]

// '12'.slice(0, 0 + 1) === 1 | 1 === 1
// '12'.slice(0, 0 + 2) === 12 | 12 === 12
// '12'.slice(1, 1 + 1) === 2 | 2 === 2

