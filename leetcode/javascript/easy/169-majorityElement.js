var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let hightestCount = 0;

  for (let num of nums) {
    hash[num] = hash[num] + 1 || 1;

    if (hash[num] > hightestCount) {
      res = num;
      hightestCount = hash[num];
    }
  }

  return res;
};
