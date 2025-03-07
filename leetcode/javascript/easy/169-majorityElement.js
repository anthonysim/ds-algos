var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let hightestCount = 0;

  for (let num of nums) {
    // count the number of times each number appears
    hash[num] = hash[num] + 1 || 1;
    // if the count of the current number is greater than the highest count
    // update the result and the highest count
    if (hash[num] > hightestCount) {
      res = num;
      hightestCount = hash[num];
    }
  }

  return res;
};
