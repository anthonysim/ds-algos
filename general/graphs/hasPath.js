function hasPath(graph, src, dst) {
  if (src == dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;;
  }
  return false;
}

// function hasPath(graph, src, dst) {
//   const queue = [src];

//   while (queue.length) {
//     const current = queue.shift();

//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
//   return false;
// }

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

console.log(hasPath(graph, 'f', 'k'));
