function robber(nums) {
  let rob1 = 0;
  let rob2 = 0;

  for (let num of nums) {
    let temp = Math.max(rob1 + num, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  let first = nums.slice(0, nums.length - 1);
  let second = nums.slice(1);

  return Math.max(robber(first), robber(second));
};