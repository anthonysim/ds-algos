var spiralOrder = function (matrix) {
  let res = [];

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {

    for (let i = colBegin; i <= colEnd; i++) {
      res.push(matrix[rowBegin][i]);
    }
    rowBegin += 1;

    for (let i = rowBegin; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd -= 1;

    if (!(rowBegin <= rowEnd && colBegin <= colEnd)) break;

    for (let i = colEnd; i >= colBegin; i--) {
      res.push(matrix[rowEnd][i]);
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= rowBegin; i--) {
      res.push(matrix[i][colBegin]);
    }
    colBegin += 1;
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Time complexity: (M⋅N). This is because we visit each element once.

//Space complexity: (1). This is because we don't use other data structures. Remember that we don't include the output array in the space complexity.
1