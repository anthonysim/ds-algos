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

console.log(getSum(2, 3)); // 5


// bits 8 4 2 1
// ------------
//      0 0 1 0 --> 2
//      0 0 1 1 --> 3
// ------------
//      0 0 0 1
//      0 1 0 0

// total is 5 bits