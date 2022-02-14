function helper(arr) {
  let prev = 0;
  let curr = 0;
  let temp;

  for (let num of arr) {
    temp = curr;
    curr = Math.max(num + prev, curr);
    prev = temp;
  }
  return curr;
}

function rob(nums) {
  if (nums.length === 1) return nums[0];
  let rob1 = nums.slice(0, nums.length - 1);
  let rob2 = nums.slice(1);

  rob1 = helper(rob1);
  rob2 = helper(rob2);

  return Math.max(rob1, rob2);
};