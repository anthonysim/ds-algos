function dfs(board, i, j, remain) {
  // if it reached the very end and finds every char, return true;
  if (remain.length === 0) {
    return true;
  }
  // if it reaches outside of the board or no match, return false;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }
  // return false if there is no match
  if (board[i][j] !== remain[0]) {
    return false;
  }
  // cross out already visited
  let char = board[i][j];
  board[i][j] = '-';

  let result = (
    dfs(board, i + 1, j, remain.substring(1)) // checks down
    || dfs(board, i - 1, j, remain.substring(1)) // checks  up
    || dfs(board, i, j + 1, remain.substring(1)) // checks right
    || dfs(board, i, j - 1, remain.substring(1)) // checks left
  );

  // if false, place char back in.
  board[i][j] = char;

  return result;
}

function exist(board, word) {
  // if the board or word is empty, return false;
  if (board.length === 0 || word.length === 0) {
    return false;
  }

  // potentially iterates through every single item in the matrix.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // backtracking/recursion to check each char in the matrix.
      if (dfs(board, i, j, word)) {
        return true;
      }
    }
  }
  return false;
};

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
let word = "ABCCED"

console.log(exist(board, word))