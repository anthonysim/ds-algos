var countNegatives = function (grid) {
  let count = 0;
  let i = 0;
  let j = grid[0].length - 1;
  let width = grid[0].length - 1;


  while (i < grid.length && j >= -1) {
    if (grid[i][j] >= 0 || j < 0) {
      count += (width - j);
      i += 1;
    } else {
      j -= 1;
    }
  }
  return count;
}

// time: O(n + m)