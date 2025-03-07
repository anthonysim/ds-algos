var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
      let j = 0;
      let compareStr = strs[i];

      while (j < Math.min(prefix.length, compareStr.length)) {
          if (prefix[j] !== compareStr[j]) {
              break;
          }
          j += 1;
      }
      prefix = prefix.slice(0, j);
  }
  return prefix;
};