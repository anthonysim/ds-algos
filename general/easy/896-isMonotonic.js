function direction(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue;
    if (arr[i] < arr[i - 1]) return 'down';
    if (arr[i] > arr[i - 1]) return 'up';
  }
}

function isMonotonic(arr) {
  if (arr.length <= 2) return true;
  let res;
  if (direction(arr) === 'down') {
    res = arr.every((num, i, array) => num <= array[i - 1] || array[i - 1] === undefined);
  } else {
    res = arr.every((num, i, array) => num >= array[i - 1] || array[i - 1] === undefined);
  }
  return res;
}