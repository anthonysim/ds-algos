function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < target_sum) {
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1;
    }
  }
  return count;
}

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let res = 0;

  for (i = 0; i < arr.length; i++) {
    res += search_pair(arr, target - arr[i], i);
  }
  return res;
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3)); // 2, [-1, 0, 3], [-1, 0, 2]