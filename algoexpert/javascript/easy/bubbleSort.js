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
    if (isSwapped === false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));