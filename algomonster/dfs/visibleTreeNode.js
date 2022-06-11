function visibleTreeNode(root) {
  let count = 0;

  function dfs(node) {
    if (node.val >= root.val) {
      count += 1;
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }

  dfs(root);
  return count;
}

// time: O(n)
// space: O(n)