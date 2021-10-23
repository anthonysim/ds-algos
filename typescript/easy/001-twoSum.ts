function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let diff: number = target - nums[i];
    if (diff in hash) {
      return [hash[diff], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));