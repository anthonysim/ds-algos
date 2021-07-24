var maxProfit = function (prices) {
  let max = 0;
  let prev = Infinity;

  for (let price of prices) {
    prev = Math.min(prev, price);
    max = Math.max(max, price - prev);
  }
  return max;
};
