var diameterOfBinaryTree = function (root) {
  let max = 0;

  function dfs(root) {
    if (!root) return 0;

    let l = dfs(root.left);
    let r = dfs(root.right);

    max = Math.max(max, l + r);
    return Math.max(l, r) + 1;
  }
  dfs(root);
  return max;
};
