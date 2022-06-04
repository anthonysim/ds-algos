var canPermutePalindrome = function (s) {
  const map = {};
  let offset = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!map[char]) {
      map[char] = 1;
      offset += 1;
    } else {
      map[char] = map[char] - 1
      offset -= 1;
    }
  }
  return offset <= 1;
};