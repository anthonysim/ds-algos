function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while ((j >= 0) && (current < arr[j])) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));