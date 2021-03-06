function spiralTraverse(matrix) {
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