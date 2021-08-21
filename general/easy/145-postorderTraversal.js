function postorderTraversal(root) {
  if (root === null) return [];
  const res = [];
  function dfs(node) {
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    res.push(node.val);
  }
  dfs(root);
  return res;
};