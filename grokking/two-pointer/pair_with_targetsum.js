const pair_with_targetsum = function (arr, target) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (diff in hash) {
      return [hash[diff], i];
    } else {
      hash[arr[i]] = i;
    }
  }
}

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(pair_with_targetsum([2, 5, 9, 11], 11)) // [0, 2]