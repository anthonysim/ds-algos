// goes through the array and selects the min number to swap

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}


console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));