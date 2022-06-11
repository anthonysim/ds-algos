function peakOfMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundary = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1]) {
      right = mid - 1;
      boundary = mid;
    } else {
      left = mid + 1;
    }
  }
  return boundary;
}

console.log(peakOfMountainArray([0, 1, 2, 3, 2, 1, 0])); // 3
