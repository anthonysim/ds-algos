function robber(nums: number[]): number {
  let prev = 0;
  let rob1 = 0;
  let rob2 = 0;

  for (let num of nums) {
    prev = Math.max(rob1 + num, rob2);
    rob1 = rob2;
    rob2 = prev;
  }
  return prev;
}


function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let first: number[] = nums.slice(0, nums.length - 1);
  let second: number[] = nums.slice(1);

  return Math.max(robber(first), robber(second));
};

console.log(rob([2, 3, 2])); //3
console.log(rob([1, 2, 3, 1])); //4