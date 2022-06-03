function firstDuplicateValue(arr) {
  const hash = {};

  for (let num of arr) {
    if (!(num in hash)) {
      hash[num] = null;
    }
    hash[num] += 1;

    if (hash[num] > 1) {
      return num;
    }
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));