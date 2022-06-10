// Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger than or equal to the target. Assume that it is guaranteed to find a satisfying number.

function firstNotSmaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      boundary_index = mid;
      right = mid - 1;

    } else {
      left = mid + 1;
    }
  }
  return boundary_index;
}

console.log(firstNotSmaller([1, 3, 3, 5, 8, 8, 10], 2)) // index at 2

// time: O(logN)
// space: O(1)