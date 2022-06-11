function length_of_longest_substringNum(nums, k) {
  const hash = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!(num in hash)) hash[num] = 0;
    hash[num] += 1;

    while ((i - start + 1) - hash['1'] > k) {
      let item = nums[start];
      hash[item] -= 1;
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
}

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9