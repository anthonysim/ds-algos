function letterCasePermutation(str) {
  let result = [];
  let slate = []

  function dfs(i, str) {
    if (i === str.length) {
      result.push(slate.join(''));
      return;
    }

    let char = str[i];

    if (char.match(/[a-zA-Z]/g)) {
      slate.push(char.toUpperCase());
      dfs(i + 1, str);
      slate.pop();

      slate.push(char.toLowerCase());
      dfs(i + 1, str);
      slate.pop();
    } else {
      slate.push(char);
      dfs(i + 1, str);
      slate.pop()
    }
  }
  dfs(0, str);
  return result;
};