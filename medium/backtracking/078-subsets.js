function subsets(nums) {
  let res = [];
  let subset = [];

  function dfs(i, arr) {
    if (i >= arr.length) {
      res.push(subset.slice());
      return;
    }
    subset.push(nums[i]);
    dfs(i + 1, arr);

    subset.pop();
    console.log(i, subset)
    dfs(i + 1, arr);
  }
  dfs(0, nums);
  return res;
}