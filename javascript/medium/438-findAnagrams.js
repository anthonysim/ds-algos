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
    let rightChar = str[i];

    if (rightChar in hash) hash[rightChar] -= 1;
    if (hash[rightChar] === 0) matched += 1;
    // push index to res if match
    if (matched === Object.keys(hash).length) res.push(start);

    // if the permutation isn't found, but the length is the same as the pattern
    if (i >= pattern.length - 1) {
      let leftChar = str[start];
      start += 1;

      // if the leftChar is in the hash, remove the match and increase the count.
      if (leftChar in hash) {
        if (hash[leftChar] === 0) matched -= 1;
        hash[leftChar] += 1;
      }
    }
  }
  return res;
};