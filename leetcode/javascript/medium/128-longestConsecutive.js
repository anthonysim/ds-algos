var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let max = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 0;

      while (numSet.has(num + length)) {
        length += 1;
      }
      max = Math.max(max, length);
    }
  }
  return max;
};

// time and space: O(N)