function productExceptSelf(nums: number[]): number[] {
  const table: number[] = new Array(nums.length).fill(1);
  let factor: number = 1;

  for (let i = 0; i < nums.length; i++) {
    table[i] *= factor;
    factor *= nums[i];
  }
  factor = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    table[i] *= factor;
    factor *= nums[i];
  }
  return table;
};

// Time complexity : O(N) where NN represents the number of elements in the input array. We use one iteration to construct the array LL, one to construct the array RR and one last to construct the answeranswer array using LL and RR.

// Space complexity : O(N) used up by the two intermediate arrays that we constructed to keep track of product of elements to the left and right.