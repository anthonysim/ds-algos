function buildDirectedGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  }
  return graph;
};


function canFinish(numCourses, prerequisites) {
  if (!prerequisites.length) return true;

  const courseGraph = buildDirectedGraph(prerequisites.slice(0));
  const discovered = new Set();
  const coursesTaken = [];
  const processing = new Set();
  let hasCycle = false;

  const depthFirstSearch = node => {
    if (processing.has(node)) {
      hasCycle = true;
      return;
    }

    if (hasCycle) return;
    if (discovered.has(node)) return;

    discovered.add(node);
    processing.add(node);

    courseGraph[node].forEach(depthFirstSearch);

    processing.delete(node);
    coursesTaken.push(node);
  };

  for (let i = 0; i < prerequisites.length; i++) {
    const node = prerequisites[i][0];
    depthFirstSearch(node);
  }

  return !hasCycle;
};

console.log(canFinish(2, [[1, 0]])); // true