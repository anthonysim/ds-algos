var singleNumber = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      delete hash[nums[i]]
    } else {
      hash[nums[i]] = i;
    }
  }
  return Object.keys(hash)[0];
};

console.log(singleNumber([2, 2, 1]));