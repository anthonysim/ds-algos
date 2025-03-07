function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    while (j < Math.min(prefix.length, strs[i].length)) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
      j += 1;
    }
    prefix = prefix.slice(0, j);
  }
  return prefix;
}
