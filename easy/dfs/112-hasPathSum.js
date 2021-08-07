var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === sum ? true : false;
  }
  sum -= root.val;
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};