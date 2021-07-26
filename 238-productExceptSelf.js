var productExceptSelf = function (nums) {
  let result = new Array(nums.length).fill(1);
  let factor = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= factor;
    factor *= nums[i];
  }

  factor = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= factor;
    factor *= nums[j];
  }
  return result;
};