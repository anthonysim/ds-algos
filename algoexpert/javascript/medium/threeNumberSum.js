function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    let base = arr[i];

    while (left < right) {
      let total = base + arr[left] + arr[right];
      if (total === target) {
        res.push([base, arr[left], arr[right]]);
        left += 1;
        right -= 1;
      } else {
        if (total > target) {
          right -= 1;
        } else {
          left += 1;
        }
      }
    }
  }
  return res;
}


console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// [ [-8, 2, 6], [-8, 3, 5], [-6, 1, 5] ]