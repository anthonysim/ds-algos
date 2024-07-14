var characterReplacement = function (str, k) {
  const hash = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    if (!(rightChar in hash)) hash[rightChar] = 0;
    hash[rightChar] += 1;

    while ((i - start + 1) - Math.max(...Object.values(hash)) > k) {
      let leftChar = str[start];
      hash[leftChar] -= 1;
      start += 1;
    }

    max = Math.max(max, i - start + 1);
  }
  return max;
};


console.log(characterReplacement("ABAB", 2)); // 4