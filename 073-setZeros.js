var setZeroes = function (matrix) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  let zerosArr = [];
  // find the locations [row, col] of all the zeros
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        zerosArr.push([i, j]);
      }
    }
  }
  let len = zerosArr.length;
  // using the zerosArr, change all the rows to zeros.
  for (let k = 0; k < len; k++) {
    matrix[zerosArr[k][0]].fill(0);
  }
  // using the zerosArr, change all the cols to zeros.
  for (let l = 0; l < len; l++) {
    let column = zerosArr[l][1];
    for (let m = 0; m < rowLength; m++) {
      matrix[m][column] = 0;
    }
  }
  return matrix;
};