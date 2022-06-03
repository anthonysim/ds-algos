function kadanesAlgorithm(arr) {
  let current = -Infinity;
  let max = -Infinity;

  for (let num of arr) {
    current = Math.max(num, num + current);
    max = Math.max(max, current);
  }
  return max;
}