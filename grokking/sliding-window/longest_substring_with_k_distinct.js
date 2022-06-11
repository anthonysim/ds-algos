// O(n)

function longest_substring_with_k_distinct(str, k) {
  const hash = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!(char in hash)) {
      hash[char] = 0;
    }
    hash[char] += 1;

    while (Object.keys(hash).length > k) {
      let leftChar = str[start];
      hash[leftChar] -= 1;
      if (hash[leftChar] === 0) delete hash[leftChar];
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);  // 4
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);  // 2
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);  // 5