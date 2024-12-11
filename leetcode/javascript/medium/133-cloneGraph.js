var cloneGraph = function (node) {
  if (node === null) return null;
  // Nodes we have already copied
  const visited = {};

  function dfs(node) {
    // If we have seen this node before, return it
    if (node.val in visited) {
      return visited[node.val];
    }
    // Create base for copied node
    let root = new Node(node.val);
    visited[node.val] = root;
    // Add copied neighbors to the current copied node
    for (let neighbor of node.neighbors) {
      root.neighbors.push(dfs(neighbor));
    }
    return root;
  }

  return dfs(node);
};
