const make_squares = function (arr) {
  let res = new Array(arr.length).fill(0);

  let left = 0;
  let right = arr.length - 1;
  let highest = arr.length - 1;

  while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      res[highest] = leftSquare;
      left += 1;
    } else {
      res[highest] = rightSquare;
      right -= 1;
    }
    highest -= 1;
  }
  return res;
};

console.log(make_squares([-2, -1, 0, 2, 3])); // [0, 1, 4, 4, 9]