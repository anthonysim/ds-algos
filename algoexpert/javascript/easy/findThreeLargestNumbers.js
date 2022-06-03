function findThreeLargestNumbers(arr) {
  let res = [];

  while (res.length < 3) {
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    let splicedNum = arr.splice(index, 1);
    res.unshift(splicedNum[0]);
  }
  return res;
}