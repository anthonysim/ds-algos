function combine(n, k) {
  let res = [];

  function dfs(i, temp) {
    if (temp.length === k) {
      res.push(temp.slice());
      return;
    }

    if (i > n) return;

    temp.push(i);
    dfs(i + 1, temp);

    temp.pop();
    dfs(i + 1, temp);
  }

  dfs(1, []);
  return res;
};