var goodNodes = function (root) {
  if (root === null) return 0;
  let count = 0;

  function dfs(node, preMax) {
    if (node.val >= preMax) count += 1;

    if (node.left) dfs(node.left, Math.max(node.val, preMax));
    if (node.right) dfs(node.right, Math.max(node.val, preMax));
  }
  dfs(root, -Infinity);
  return count;
};