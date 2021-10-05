function combinationSum3(k, target) {
  const res = [];

  function dfs(pos, target, temp) {
    if (target === 0 && temp.length === k) {
      res.push(temp.slice());
    }

    if (target < 0) {
      return;
    }

    for (let i = pos; i <= 9; i++) {
      temp.push(i);
      dfs(i + 1, target - i, temp);

      temp.pop();
    }
  }
  dfs(1, target, []);
  return res;
};