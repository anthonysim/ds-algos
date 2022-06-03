function getPermutations(nums) {
  if (nums.length === 0) return [];
  let res = [];

  function dfs(i) {
    if (i >= nums.length) {
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
}