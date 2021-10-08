function lengthOfLongestSubstring(str) {
  let wordArr = [];
  let max = 0;

  for (let char of str) {
    while (wordArr.includes(char)) {
      wordArr = wordArr.splice(1);
    }
    wordArr.push(char);
    max = Math.max(max, wordArr.length);
  }
  return max;
};