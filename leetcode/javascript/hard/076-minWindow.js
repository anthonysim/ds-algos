var minWindow = function (str, target) {
  const hash = target.split('').reduce((acc, val) => {
    if (!acc[val]) acc[val] = 0;
    acc[val] += 1;
    return acc;
  }, {})

  let start = 0;
  let matched = 0;
  let min = Infinity;
  let substrStart = null;

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];

    if (rightChar in hash) hash[rightChar] -= 1;
    if (hash[rightChar] >= 0) matched += 1;

    while (matched === target.length) {
      if (i - start + 1 < min) {
        min = i - start + 1;
        substrStart = start;
      }

      const leftChar = str[start];
      start += 1;

      if (hash[leftChar] === 0) matched -= 1;
      if (leftChar in hash) hash[leftChar] += 1;
    }
  }
  return min === Infinity ? '' : str.slice(substrStart, substrStart + min);
};

// time & space: O(N + M)