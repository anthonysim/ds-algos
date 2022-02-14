var hammingWeight = function (n) {
  let res = 0;

  while (n) {
    // checks to see if the first bit on the far right is a 1 or not
    res += n & 1; // 1 & 1 = 1 | 0 & 1 = 0
    n = n >>> 1; // >>> shifts to to the right
  }
  return res;
};

console.log(hammingWeight(00000000000000000000000000001011));  // 3