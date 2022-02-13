function spiralOrder(matrix) {
  let result = [];

  if (matrix.length == 0) {
    return result;
  }

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i])
    }
    rowBegin += 1;
    // far right
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd])
    }
    colEnd -= 1;

    if (!(rowBegin <= rowEnd && colBegin <= colEnd)) break;

    //scan bottom right to left
    for (let i = colEnd; i >= colBegin; i--) {
      result.push(matrix[rowEnd][i])
    }
    rowEnd -= 1;
    //scan left to top
    for (let i = rowEnd; i >= rowBegin; i--) {
      result.push(matrix[i][colBegin])
    }
    colBegin += 1;
  }
  return result;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Let MM be the number of rows and NN be the number of columns.
// Time complexity: O(M \cdot N)O(M⋅N). This is because we visit each element once.
//Space complexity: O(1)O(1). This is because we don't use other data structures. Remember that we don't include the output array in the space complexity.
1