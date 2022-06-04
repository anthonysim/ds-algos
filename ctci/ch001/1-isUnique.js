function isUnique(str) {
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!(char in hash)) hash[char] = 0;
    hash[char] += 1;

    if (hash[char] > 1) return false;
  }
  return true;
}

// time: O(n)
// space: O(n)

