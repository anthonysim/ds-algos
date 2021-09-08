function longestMountain(arr) {
  if (arr.length === 0) return 0;

  let peaksArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      peaksArr.push(i);
    }

  }
  if (peaksArr.length === 0) return 0;
  let max = -Infinity;

  for (let j = 0; j < peaksArr.length; j++) {
    let leftIndex = peaksArr[j];
    let rightIndex = peaksArr[j];
    let count = 1;

    while (arr[leftIndex - 1] < arr[leftIndex] && leftIndex >= 0) {
      count += 1;
      leftIndex -= 1;
    }

    while (arr[rightIndex + 1] < arr[rightIndex] && rightIndex < arr.length) {
      count += 1;
      rightIndex += 1;
    }
    max = Math.max(max, count);
  }
  return max;
};

console.log(longestMountain([2, 2, 2]));