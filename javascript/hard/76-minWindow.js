var minWindow = function (str, pattern) {
  let start = 0;
  let matched = 0;
  let substrStart = 0;
  let min = str.length + 1;

  const hash = pattern.split('').reduce((acc, val) => {
    if (!(acc[val])) {
      acc[val] = 0;
    }
    acc[val] += 1;
    return acc;
  }, {})

  for (i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in hash) hash[char] -= 1;
    if (hash[char] >= 0) matched += 1;

    while (matched === pattern.length) {
      if (min > i - start + 1) {
        min = i - start + 1;
        substrStart = start;
      }

      const letter = str[start];
      start += 1;
      if (letter in hash) {
        if (hash[letter] === 0) matched -= 1;
        hash[letter] += 1;
      }
    }
  }
  if (min > str.length) return '';
  return str.substring(substrStart, substrStart + min);
}