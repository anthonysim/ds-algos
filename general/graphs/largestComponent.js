function exploreSize(graph, current, visited) {
  if (visited.has(current.toString())) return 0;

  visited.add(current.toString());

  let size = 1;

  for (let neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
}


function largestComponent(graph) {
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    let size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
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

console.log(largestComponent(graph)); // 4