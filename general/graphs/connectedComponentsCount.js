function explore(graph, current, visited) {
  // check if the current node has been visited
  if (visited.has(current.toString())) return;

  // add current node to visited ex. 0 would be [8, 1, 5]
  visited.add(current.toString());

  // iterate through neighbors ex. 0 neighbors are [8, 1, 5]
  for (let neighbor of graph[current]) {
    // recursion to visit all connected
    explore(graph, neighbor, visited);
  }
  return true;
}

function countedComponentsCount(graph) {
  const visited = new Set();
  let count = 0;

  // iterate through the "graph" ex. 0, 1, 5, etc.
  for (let node in graph) {
    // send graph, current node, and new Set to dfs graph search
    if (explore(graph, node, visited)) {
      // count up when all possibilities have been visited
      count += 1;
    }
  }
  return count;
}

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}

console.log(countedComponentsCount(graph)); // 2