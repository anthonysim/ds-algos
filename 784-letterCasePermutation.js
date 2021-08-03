function letterCasePermutation(s) {
  let result = [];
  let slate = []

  function dfs(i, s) {
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    let char = s[i];

    if (char.match(/[a-zA-Z]/g)) {
      slate.push(char.toUpperCase());
      dfs(i + 1, s, slate);
      slate.pop();

      slate.push(char.toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();
    } else {
      slate.push(char);
      dfs(i + 1, s, slate);
      slate.pop()
    }
  }
  dfs(0, s);
  return result;
};