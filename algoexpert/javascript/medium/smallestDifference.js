function smallestDifference(arr1, arr2) {
  let min = Infinity;
  let res;

  for (let first of arr1) {
    for (let i = 0; i < arr2.length; i++) {
      let second = arr2[i];
      let diff = Math.abs(first - second);

      if (diff < min) {
        min = diff;
        res = [];
        res.push(first, second);
      }
    }
  }
  return res;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
//[28, 26];