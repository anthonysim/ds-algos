function isSubsequence(s, t) {
  let i = 0;

  for (let char of t) {
    if (char === s[i]) {
      i += 1;
    }
  }
  return i === s.length;
};