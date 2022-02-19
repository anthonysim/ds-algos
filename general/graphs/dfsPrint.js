function dfsPrint(graph, source) {
  console.log(source);

  for (let neighbor of graph[source]) {
    dfsPrint(graph, neighbor);
  }
}


const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

console.log(dfsPrint(graph, 'a'));