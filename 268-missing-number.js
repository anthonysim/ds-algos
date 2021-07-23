var missingNumber = function (nums) {
  let missing = null;

  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      missing = i;
    }
  }
  return missing;
};