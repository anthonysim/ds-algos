function letterCombinations(digits) {
  const res = [];
  const hash = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  function backtrack(i, currentStr) {
    if (currentStr.length === digits.length) {
      console.log(currentStr);
      res.push(currentStr);
      return;
    }

    for (let char of hash[digits[i]]) {
      backtrack(i + 1, currentStr + char);
    }

  }
  if (digits) {
    backtrack(0, '');
  }
  return res;
};