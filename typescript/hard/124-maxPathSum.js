function maxPathSum(root) {
  let res = [root.val];

  function dfs(root) {
    if (root === null) return 0;

    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(leftMax, 0);
    rightMax = Math.max(rightMax, 0);

    res[0] = Math.max(res[0], root.val + leftMax + rightMax);

    return root.val + Math.max(leftMax, rightMax);
  }
  dfs(root);
  return res[0];
};