function nonConstructibleChange(coins) {
  coins = coins.sort((a, b) => a - b);
  let curr = 0;

  for (let coin of coins) {
    if (coin > curr + 1) {
      return curr + 1;
    }
    curr += coin;
  }
  return curr + 1;
}