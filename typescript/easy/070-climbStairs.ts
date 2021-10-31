function climbStairs(n: number, hash: { [key: string]: number } = {}): number {
  if (hash[n]) return hash[n];
  if (n === 0) return 1;
  if (n < 0) return 0;

  hash[n] = climbStairs(n - 1, hash) + climbStairs(n - 2, hash);
  return hash[n];
};