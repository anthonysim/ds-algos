function countSubstrings(str) {
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    // checks odds
    let left = i;
    let right = i;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      res += 1;
      left -= 1;
      right += 1;
    }
    // checks evens
    left = i;
    right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      res += 1;
      left -= 1;
      right += 1;
    }
  }
  return res;
};

console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6
