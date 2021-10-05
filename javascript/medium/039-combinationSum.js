function combinationSum2(candidates, target) {
  candidates = candidates.sort();
  const res = [];

  function dfs(pos, target, temp) {
    if (target === 0) {
      res.push(temp.slice());
    }

    if (target < 0) return;

    for (let i = pos; i < candidates.length; i++) {
      if (i > pos && candidates[i] === candidates[i - 1]) continue;
      temp.push(candidates[i]);
      dfs(i + 1, target - candidates[i], temp);

      temp.pop();
    }
  }
  dfs(0, target, []);
  return res;
};
