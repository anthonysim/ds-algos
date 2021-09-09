var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function dfs(root) {
    if (!root) {
      return 0;
    }
    let l = dfs(root.left);
    let r = dfs(root.right);

    diameter = Math.max(diameter, l + r + 1);
    return Math.max(l, r) + 1
  }
  dfs(root);
  return diameter - 1;
};