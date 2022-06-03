// algoexpert "moved" the fib down, normally the 6th fib would be 8, but in this case 5?!

function getNthFib(n, memo = {}) {
  if (n <= 1) return 0;
  if (n === 2) return 1;

  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
}