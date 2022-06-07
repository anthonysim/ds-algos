function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
      }
    }
    if (isSwapped === false) break;
  }
  return arr;
}


console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));