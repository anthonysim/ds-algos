function characterReplacement(str, k) {
  const hash = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!(char in hash)) hash[char] = 0;
    hash[char] += 1;

    // in the case that the current window is not valid, shrink the window
    while ((i - start + 1) - Math.max(...Object.values(hash)) > k) {
      let item = str[start];
      hash[item] -= 1;
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};


console.log(characterReplacement("ABAB", 2)); // 4