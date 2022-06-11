// O(n)

function smallest_subarray_with_given_sum(target, arr) {
  let sum = 0;
  let min = Infinity;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= target) {
      min = Math.min(min, i - start + 1);
      sum -= arr[start];
      start += 1;
    }
  }
  return min === Infinity ? 0 : min;
};

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`); // 2
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`); // 1
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`); // 3