// O: an array that represents the max sum of k.
// I: an array of numbers and a the number of elements in the array
// C: n/a
// E: n/a

// O(n)

function max_sub_array_of_size_k(k, nums) {
  let max = 0;
  let sum = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= nums[start];
      start += 1;
    }
  }
  return max;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])); // 7