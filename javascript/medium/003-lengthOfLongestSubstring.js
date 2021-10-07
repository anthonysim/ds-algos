function lengthOfLongestSubstring(str) {
  let hash = [];
  let res = 0;

  for (let char of str) {
    while (hash.includes(char)) {
      hash = hash.splice(1)
    }
    hash.push(char);
    res = Math.max(res, Object.keys(hash).length);
  }
  return res;
};