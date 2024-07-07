var setZeroes = function (matrix) {
  let rows = [];
  let cols = [];

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[0].length; j++) {

      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[0].length; j++) {

      if (rows.includes(i) || cols.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(setZeroes(
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]
));