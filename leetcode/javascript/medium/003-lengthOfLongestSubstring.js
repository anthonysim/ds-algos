var lengthOfLongestSubstring = function (str) {
  const set = new Set();
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];

    while (set.has(rightChar)) {
      let leftChar = str[start];
      set.delete(leftChar);
      start += 1;
    }

    set.add(rightChar);
    max = Math.max(max, i - start + 1);
  }
  return max;
};
