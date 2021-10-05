function maxProduct(nums) {
  let res = -Infinity;
  let curMin = 1;
  let curMax = 1;
  let temp;

  for (let num of nums) {
    temp = curMax * num;
    curMax = Math.max(num * curMax, num * curMin, num);
    curMin = Math.min(temp, num * curMin, num);
    res = Math.max(res, curMax);
  }
  return res;
};