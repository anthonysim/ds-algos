var twoSum = function (numbers, target) {
  const hash = {};

  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];

    if (diff in hash) {
      return [hash[diff] + 1, i + 1];
    } else {
      hash[numbers[i]] = i;
    }
  }
};

// time: O(n)
// space: O(n)