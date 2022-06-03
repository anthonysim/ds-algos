function longestPeak(arr) {
  if (arr.length === 0) return 0;

  // find the highest peaks
  let peaksArr = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (arr[i - 1] < current && arr[i + 1] < current) {
      peaksArr.push([current, i]);
    }
  }

  let max = -Infinity;
  for (let j = 0; j < peaksArr.length; j++) {
    let peak = peaksArr[j][0];
    let leftIndex = peaksArr[j][1];
    let rightIndex = peaksArr[j][1];
    let count = 1;
    // count all the nums on the left to see if they are smaller than the one to the right
    while (arr[leftIndex - 1] < arr[leftIndex] && leftIndex >= 0) {
      count += 1;
      leftIndex -= 1;
    }
    // count all the nums on the right to see if they are smaller than the one to the left
    while (arr[rightIndex + 1] < arr[rightIndex] && rightIndex < arr.length) {
      count += 1;
      rightIndex += 1;
    }
    max = Math.max(max, count);
  }
  return max === -Infinity ? 0 : max;
}

console.log(longestPeak([1, 1, 3, 2, 1]));