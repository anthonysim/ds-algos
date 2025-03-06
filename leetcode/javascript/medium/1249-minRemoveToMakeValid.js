function minRemoveToMakeValid(str) {
  let res = [];
  let count = 0;

  for (let char of str) {
    if (char === "(") {
      res.push(char);
      count += 1;
    } else if (char === ")" && count > 0) {
      res.push(char);
      count -= 1;
    } else if (char !== ")") {
      res.push(char);
    }
  }

  let filtered = [];
  for (let i = res.length - 1; i >= 0; i--) {
    let char = res[i];
    if (char === "(" && count > 0) {
      count -= 1;
    } else {
      filtered.push(char);
    }
  }
  return filtered.reverse().join("");
}
