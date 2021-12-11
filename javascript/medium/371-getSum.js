var getSum = function (a, b) {
  while (b) {
    // temp variable holds "and" so its not overridden below
    let temp = a & b;
    // compares a and b 1 ^ 1 = 0 |  1 ^ 0 = 1
    a ^= b;
    // compares a and b then shifts everything to the left 1 & 1 = 1 | 1 & 0 = 0 | 0 & 0 = 1
    b = temp << 1;
  }
  return a;
};

console.log(getSum(1, 2)); // 3