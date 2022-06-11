function length_of_longest_substring(str, k) {
  const hash = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!(char in hash)) hash[char] = 0;
    hash[char] += 1;

    // increases max unless there are more replacements than k allows (no more than k)
    while ((i - start + 1) - Math.max(...Object.values(hash)) > k) {
      let item = str[start];
      hash[item] -= 1;
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
}

console.log(length_of_longest_substring('aabccbb', 2)); // 5
console.log(length_of_longest_substring('abbcb', 1)); // 4
console.log(length_of_longest_substring('abccde', 1)); // 3