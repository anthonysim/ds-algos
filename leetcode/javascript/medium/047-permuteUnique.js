function permuteUnique(nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  const hash = {};

  function dfs(i) {
    if (i === nums.length) {
      if (hash[nums]) {
        return;
      }
      hash[nums] = nums.slice();
      res.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  dfs(0);
  return res;
};