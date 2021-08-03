function subsetsWithDup(nums) {
  nums = nums.sort((a, b) => a - b);

  let res = [];
  let slate = [];

  function dfs(i) {
    if (i === nums.length) {
      res.push(slate.slice());
      return;
    }

    let char = nums[i];
    slate.push(char);
    dfs(i + 1);

    slate.pop();
    dfs(i + 1);
  }
  dfs(0, nums);

  const hash = {};

  for (let arr of res) {
    if (arr in hash) {
      continue;
    }
    hash[arr] = arr;
  }
  return Object.values(hash);
};