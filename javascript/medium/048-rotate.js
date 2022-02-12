function rotate(matrix) {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    let top = left;
    let bottom = right;

    for (let i = 0; i < right - left; i++) {

      // save top left
      let topLeft = matrix[top][left + i];

      // bottom left to top left
      matrix[top][left + i] = matrix[bottom - i][left];

      // bottom right into bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i];

      // right into bottom right
      matrix[bottom][right - i] = matrix[top + i][right];

      // top left into top right
      matrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
  return matrix;
}


// Time Complexity, O(N^2)...matrix is N by N
// Space Complexity, O(1)...no extra memory, matrix is changed in place

