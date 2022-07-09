var isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const value = board[i][j];

      if (value !== ".") {
        const rowStr = `${value} at row ${i}`;
        const colStr = `${value} at col ${j}`;
        const boxStr = `${value} at box (${Math.floor(i / 3)}, ${Math.floor(j / 3)})`;

        if (set.has(rowStr) || set.has(colStr) || set.has(boxStr)) {
          return false;
        } else {
          set.add(rowStr);
          set.add(colStr);
          set.add(boxStr);
        }
      }
    }
  }
  return true;
};

// time and space: O(n^2)