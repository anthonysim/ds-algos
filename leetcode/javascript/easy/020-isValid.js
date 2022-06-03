var isValid = function (str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let lastItem = res[res.length - 1];

    if (char === '(' || char === '[' || char === '{') {
      res.push(char);
    } else if (
      char === ')' && lastItem === '('
      || char === ']' && lastItem === '['
      || char === '}' && lastItem === '{'
    ) {
      res.pop();
    } else {
      return false;
    }
  }
  return res.length === 0 ? true : false;
};

// time and space: O(n)