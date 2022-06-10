function find_boundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid]) {
      right = mid - 1;
      boundaryIndex = mid;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

// time: O(logN)
// space: O(1)