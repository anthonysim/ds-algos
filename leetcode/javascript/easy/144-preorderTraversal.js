function preorderTraversal(root) {
  if (root === null) return [];
  const res = [];

  function dfs(node) {
    res.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};