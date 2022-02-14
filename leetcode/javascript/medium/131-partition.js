function isPali(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};


function partition(str) {
  let res = [];
  let part = [];

  function dfs(i) {
    if (i === str.length) {
      res.push(part.slice());
      return;
    }

    for (let j = i; j < str.length; j++) {
      if (isPali(str, i, j)) {
        part.push(str.slice(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  }
  dfs(0);
  return res;
};