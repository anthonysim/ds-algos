var inorderTraversal = function (root) {
  if (root === null) return [];
  let result = [];

  function dfs(node) {
    if (node.left) dfs(node.left);
    result.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return result;
};