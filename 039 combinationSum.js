function combinationSum(candidates, target) {
  let res = [];

  function dfs(i, target, temp) {
    console.log(target, temp)
    if (target === 0) {
      res.push(temp.slice());
      return;
    }

    if (target < 0 || i === candidates.length) {
      return;
    }

    temp.push(candidates[i]);
    dfs(i, target - candidates[i], temp);

    temp.pop();
    dfs(i + 1, target, temp);
  }
  dfs(0, target, []);
  return res;
};