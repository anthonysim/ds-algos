function runningSum(nums) {
  const res = [];

  function dfs(i, total) {
    if (i >= nums.length) return;

    res.push(total + nums[i]);
    dfs(i + 1, total + nums[i]);
  }
  dfs(0, 0);
  return res;
};