function productSum(arr, mult = 1) {
  let sum = 0;
  for (let num of arr) {
    if (Array.isArray(num)) {
      sum += productSum(num, mult + 1);
    } else {
      sum += num;
    }
  }
  return sum * mult;
}