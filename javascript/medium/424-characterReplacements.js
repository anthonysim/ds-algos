function characterReplacement(str, k) {
  let count = {};
  let res = 0;
  let left = 0;
  let maxf = 0;

  for (let right = 0; right < str.length; right++) {
    count[str[right]] = count[str[right]] + 1 || 1;
    maxf = Math.max(maxf, count[str[right]]);

    while ((right - left + 1) - maxf > k) {
      count[str[left]] -= 1;
      left += 1;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(characterReplacement("AABABBA", 1)); // 4