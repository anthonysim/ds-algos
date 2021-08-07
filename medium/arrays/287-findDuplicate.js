var findDuplicate = function (nums) {
  const hash = {};
  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      return num;
    }
  }
};