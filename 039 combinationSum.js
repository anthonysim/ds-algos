function combinationSum(candidates, target) {
  let res = [];
  let total = 0;

  function dfs(i, target, temp) {
    console.log(temp, total)
    if (target === 0) {
      res.push(temp.slice());
      return;
    }

    if (total > target || i === candidates.length) {
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