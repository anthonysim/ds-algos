function triplet_sum_close_to_target(arr, target) {
  arr.sort((a, b) => a - b);
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let total = current + arr[left] + arr[right]
      let diff = target - total;

      if (Math.abs(diff) < Math.abs(min)) {
        min = diff;
      }

      if (total < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return target - min;
}


console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2)); // 1
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1)); // 0
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100)); // 3