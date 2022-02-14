function longestPalindrome(str) {
  let res = "";
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    // checks odds
    let left = i;
    let right = i;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > max) {
        res = str.slice(left, right + 1);
        max = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
    // checks evens
    left = i;
    right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > max) {
        res = str.slice(left, right + 1);
        max = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  return res;
}

console.log(longestPalindrome("babad")); // bab