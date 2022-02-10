/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Building a graph
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

  // depth first search
  function dfs(course) {
    if (seen.has(course)) return true;
    if (seeing.has(course)) return false;

    const graph = buildDirectedGraph(numCourses, prerequisites)
    if (graph === undefined) return true;
    console.log(graph)
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

  const seen = new Set();
  const seeing = new Set();

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};


console.log(canFinish(2, [[1, 0]])); // true