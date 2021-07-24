var climbStairs = function (n, hash = {}) {
  if (hash[n]) {
    return hash[n];
  }

  if (n < 0) return 0;
  if (n === 0) return 1;

  hash[n] = climbStairs(n - 1, hash) + climbStairs(n - 2, hash);
  return hash[n];
};