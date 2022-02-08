var romanToInt = function (str) {
  const code = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let first = code[str[i]];
    let second = code[str[i + 1]];

    if (first < second) {
      total -= first;
    } else {
      total += first;
    }
  }
  return total;
};