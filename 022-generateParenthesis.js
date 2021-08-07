function generateParenthesis(n) {
  const res = [];
  let temp = [];

  function backtrack(open, close) {
    if (open === n && close === n) {
      res.push(temp.slice().join(''));
      return;
    }

    if (open < n) {
      temp.push('(');
      backtrack(open + 1, close);
      temp.pop();
    }

    if (close < open) {
      temp.push(')');
      backtrack(open, close + 1);
      temp.pop();
    }
  }
  backtrack(0, 0);
  return res;
};