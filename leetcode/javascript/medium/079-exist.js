function explore(board, i, j, remain) {
  if (remain === "") return true;

  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }

  if (board[i][j] !== remain[0]) return false;

  let temp = board[i][j];
  board[i][j] = "-";

  let res = (
    explore(board, i + 1, j, remain.slice(1))
    || explore(board, i - 1, j, remain.slice(1))
    || explore(board, i, j + 1, remain.slice(1))
    || explore(board, i, j - 1, remain.slice(1))
  )

  board[i][j] = temp;
  return res;
}

var exist = function (board, word) {

  for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[0].length; j++) {

      if (explore(board, i, j, word)) {
        return true;
      }
    }
  }
  return false;
};

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
let word = "ABCCED"

console.log(exist(board, word))

// time: O(n * m 4^n)