// Uses an PreOrder DFS, the returns the kth element of the results

function kthSmallest(root, k) {
  if (root === null) return -1;
  const res = [];

  function dfs(node) {
    if (node.left) dfs(node.left);
    res.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res[k - 1];
};

// Time Complexity, O(V + E)
// Space Complexity, O(V)