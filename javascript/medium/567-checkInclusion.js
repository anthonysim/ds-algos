var checkInclusion = function (str1, str2) {
  const hash = str1.split('').reduce((acc, val) => {
    if (!acc[val]) acc[val] = 0;
    acc[val] += 1;
    return acc;
  }, {});

  let start = 0;
  let matched = 0;

  for (let i = 0; i < str2.length; i++) {
    let rightChar = str2[i];

    if (rightChar in hash) hash[rightChar] -= 1;
    if (hash[rightChar] >= 0) matched += 1;

    while (i - start + 1 > str1.length) {
      let leftChar = str2[start];
      start += 1;

      if (leftChar in hash) hash[leftChar] += 1;
      if (hash[leftChar] === 0) matched -= 1;
    }
    if (Math.max(...Object.values(hash)) === 0) return true;
  }
  return false;
};