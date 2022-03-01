function pacificAtlantic(heights) {
  const result = [];
  const pac = new Set();
  const atl = new Set();
  const LAST_ROW = heights.length - 1;
  const LAST_COL = heights[0].length - 1;

  function dfs(i, j, visited, prevHeight) {
    if (i < 0 || i > LAST_ROW || j < 0 || j > LAST_COL
      || heights[i][j] < prevHeight || visited.has(`${i} ${j}`)) {
      return;
    }

    visited.add(`${i} ${j}`);

    dfs(i + 1, j, visited, heights[i][j]);
    dfs(i - 1, j, visited, heights[i][j]);
    dfs(i, j + 1, visited, heights[i][j]);
    dfs(i, j - 1, visited, heights[i][j]);
  }


  for (let i = 0; i <= LAST_COL; i++) {
    dfs(0, i, pac, heights[0][i]);
    dfs(LAST_ROW, i, atl, heights[LAST_ROW][i]);
  }

  for (let i = 0; i <= LAST_ROW; i++) {
    dfs(i, 0, pac, heights[i][0]);
    dfs(i, LAST_COL, atl, heights[i][LAST_COL]);
  }


  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (atl.has(`${i} ${j}`) && pac.has(`${i} ${j}`)) {
        result.push([i, j]);
      }
    }
  }
  return result;
};


const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
];
console.log(pacificAtlantic(heights)); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]