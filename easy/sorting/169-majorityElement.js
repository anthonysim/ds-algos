var majorityElement = function (nums) {
  let result = nums.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 0;
    }
    acc[val] += 1;
    return acc;
  }, {});

  return Object.entries(result).sort((a, b) => b[1] - a[1])[0][0];
};