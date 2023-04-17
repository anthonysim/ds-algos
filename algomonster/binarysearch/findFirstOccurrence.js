// Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.

function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundary = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      right = mid - 1;
      boundary = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return boundary;
}

console.log(findFirstOccurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3)); // index at 1

// time: O(logN)
// space: O(1)