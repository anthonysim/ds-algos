var topKFrequent = function (nums, k) {
  let freqMap = nums.reduce((acc, val) => {
    acc[val] = acc[val] + 1 || 1
    return acc;
  }, {})

  let result = Object.keys(freqMap)
    .map((key) => [Number(key), freqMap[key]])
    .sort((a, b) => b[1] - a[1]);

  let output = [];

  for (let i = 0; i < k; i++) {
    output.push(result[i][0]);
  }
  return output
};

// time: O(N Log N)
// space: O(N)