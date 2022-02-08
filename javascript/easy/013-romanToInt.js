/*
if the current number is less than the next number then subtract the current
number from the running total, else add the current number to the running total.
*/

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
    let current = code[str[i]];
    let next = code[str[i + 1]];

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
};