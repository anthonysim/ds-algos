var countBits = function (n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    let quotient = i;
    let remainder = null;

    if (quotient === 0) {
      result.push(0);

    } else {
      while (quotient > 0) {
        remainder += quotient % 2;
        quotient = Math.floor(quotient / 2);
      }
      result.push(remainder);
    }
  }