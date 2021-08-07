var findDuplicates = function (nums) {
  let result = [];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1
    } else {
      hash[nums[i]] += 1;
      result.push(nums[i]);
    }
  }
  return result;
};