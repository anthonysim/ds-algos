function buildGraph(n, edges) {
  const graph = new Array(n).fill().map(() => []);

  for (let edge of edges) {
    let [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function explore(graph, current, visited) {
  // check if the current node has been visited
  if (visited.has(current.toString())) return false;

  // add current node to visited ex. 0 would be [8, 1, 5]
  visited.add(current.toString());

  // iterate through neighbors ex. 0 neighbors are [8, 1, 5]
  for (let neighbor of graph[current]) {
    // recursion to visit all connected
    explore(graph, neighbor, visited);
  }
  return true;
}

var countComponents = function (n, edges) {
  const graph = buildGraph(n, edges);
  console.log(graph)
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
};