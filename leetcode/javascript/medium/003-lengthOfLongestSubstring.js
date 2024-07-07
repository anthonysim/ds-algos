var lengthOfLongestSubstring = function (str) {
  const hash = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];

    if (!(rightChar in hash)) hash[rightChar] = 0;
    hash[rightChar] += 1;

    while (hash[rightChar] > 1) {
      let leftChar = str[start];
      start += 1;

      if (leftChar in hash) hash[leftChar] -= 1;
      if (hash[leftChar] === 0) delete hash[leftChar];
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

/// cleaner version
var lengthOfLongestSubstring = function (str) {
  const set = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    // in the case that the current window is not valid, shrink the window
    while (set.has(str[right])) {
      set.delete(str[left]);
      left += 1;
    }
    set.add(str[right]);
    max = Math.max(max, set.size);
  }
  return max;
};