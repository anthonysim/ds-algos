function buildDirectedGraph(numCourses, edges) {
  const graph = [...new Array(numCourses)].map(() => []);

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  }
  return graph;
};



function canFinish(numCourses, prerequisites) {
  const graph = buildDirectedGraph(numCourses, prerequisites);
  const seen = new Set();
  const seeing = new Set();

  // depth first search
  function dfs(course) {
    if (seen.has(course)) return true;
    if (seeing.has(course)) return false;

    seeing.add(course);
    for (let neighbor of graph[course]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }
    seeing.delete(course);
    seen.add(course);

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};