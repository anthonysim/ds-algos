var findAnagrams = function (str, pattern) {
  let start = 0;
  let matched = 0;
  const res = [];

  // create hash that counts the letters in pattern
  const hash = pattern.split('').reduce((acc, val) => {
    if (!acc[val]) acc[val] = 0;
    acc[val] += 1;
    return acc;
  }, {})

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char in hash) hash[char] -= 1;
    if (hash[char] === 0) matched += 1;
    // push index to res if match
    if (matched === Object.keys(hash).length) res.push(start);

    // if the permutation isn't found, but the length is the same as the pattern
    if (i >= pattern.length - 1) {
      let letter = str[start];
      start += 1;

      // if the letter is in the hash, remove the match and increase the count.
      if (letter in hash) {
        if (hash[letter] === 0) matched -= 1;
        hash[letter] += 1;
      }
    }
  }
  return res;
};