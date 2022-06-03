function sortedSquaredArray(arr) {
  let res = arr.map(num => num * num).sort((a, b) => a - b);
  return res;
}