// find the duplicate number in a sorted array

function findDuplicate(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === arr[mid + 1] || arr[mid] === arr[mid - 1]) {
      return arr[mid];
    } else if ((arr[left] + arr[right]) / 2 == arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 5])); // 5

// time: O(logN)
// space: O(1)