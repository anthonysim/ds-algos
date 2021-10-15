function coinChange(coins, amount) {
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      if (coin <= i) {
        let idx = i - coin;
        let potentialAmt = table[idx] + 1;
        table[i] = Math.min(potentialAmt, table[i]);
      }
    }
  }
  return table[table.length - 1] === Infinity ? - 1 : table[table.length - 1];
}

console.log(coinChange([1, 2, 5], 11));