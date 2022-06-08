function merge(arr1, arr2) {
  let res = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }

  if (arr1) res.push(...arr1);
  if (arr2) res.push(...arr2);

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}


console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));