var invertTree = function (root) {
  if (!root) return null;

  function dfs(node) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);

    return root;
  }

  return dfs(root);
};

// Time Complexity O(V + E)
// Space Complexity O(V)