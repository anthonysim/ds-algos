function powerset(arr) {
  const res = [];
  let temp = [];

  function backtrack(i) {
    if (i >= arr.length) {
      res.push(temp.slice());
      return;
    }

    temp.push(arr[i]);
    backtrack(i + 1);

    temp.pop();
    backtrack(i + 1);
  }
  backtrack(0);
  return res;
}