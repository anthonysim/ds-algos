function threeSumClosest(arr, target) {
  arr.sort((a, b) => a - b);
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let total = current + arr[left] + arr[right]
      let diff = target - total;

      if (Math.abs(diff) < Math.abs(min)) min = diff;

      if (total < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return target - min;
}