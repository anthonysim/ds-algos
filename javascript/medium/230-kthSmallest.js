function kthSmallest(root, k) {
  if (root === null) return null;
  let res = [];

  function dfs(node) {
    if (node.left) dfs(node.left);
    res.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  console.log(res)
  return res[k - 1];
};