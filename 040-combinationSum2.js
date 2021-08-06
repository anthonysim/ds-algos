function combinationSum2(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);

  const res = [];
  const hash = {};
  let prev = -1;

  function dfs(i, target, temp) {
    if (target === 0) {
      if (hash[temp]) {
        return;
      }
      hash[temp] = true;
      res.push(temp.slice());
      return;
    }

    if (target < 0 || i >= candidates.length) {
      return;
    }

    if ()

      temp.push(candidates[i]);
    prev = candidates[i];
    dfs(i + 1, target - candidates[i], temp);

    temp.pop();
    dfs(i + 1, target, temp);

  }
  dfs(0, target, []);
  return res;
};


console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   30))