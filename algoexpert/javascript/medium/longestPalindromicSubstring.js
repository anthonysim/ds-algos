function longestPalindromicSubstring(str) {
  let max = 0;
  let res = '';

  for (let i = 0; i < str.length; i++) {
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
  }

  for (let i = 0; i < str.length; i++) {
    let left = i;
    let right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > max) {
        res = str.slice(left, right + 1);
        max = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  return res === '' ? '' : res;
}