var numDecodings = function (s) {
  let decoding = [];
  // generate decoding pattern
  for (let i = 1; i <= 26; i++) {
    decoding.push(i.toString());
  }

  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i <= s.length; i++) {
    // iterates through the generated numbers above
    for (let code of decoding) {
      if (s.slice(i, i + code.length) === code) {
        dp[i + code.length] += dp[i];
      }
    }
  }
  return dp[dp.length - 1];
};

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// [1, 0, 0]

// '12'.slice(0, 0 + 1) === 1 | 1 === 1
// '12'.slice(0, 0 + 2) === 12 | 12 === 12
// '12'.slice(1, 1 + 1) === 2 | 2 === 2

