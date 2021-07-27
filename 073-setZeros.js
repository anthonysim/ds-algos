var setZeroes = function (matrix) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  let rows = [];
  let cols = [];
  // find the locations [row, col] of all the zeros
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  // using the zerosArr, change all the rows & cols to zeros.
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (rows.includes(i) || cols.includes(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix;
};