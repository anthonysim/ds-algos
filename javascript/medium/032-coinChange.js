function coinChange(coins, amount) {
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      if (i >= coin) {
        table[i] = Math.min(table[i - coin] + 1, table[i]);
      }
    }
  }
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
}

console.log(coinChange([1, 2, 5], 11));