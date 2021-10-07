function lengthOfLongestSubstring(str) {
  let hash = [];
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    while (hash.includes(str[i])) {
      hash = hash.splice(1)
    }
    hash.push(str[i]);
    res = Math.max(res, Object.keys(hash).length);
  }
  return res;
};