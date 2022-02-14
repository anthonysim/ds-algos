function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};

function maxPathSum(root) {
  let res = -Infinity;

  function dfs(root) {
    if (root === null) return 0;

    let leftMax = Math.max(dfs(root.left), 0);
    let rightMax = Math.max(dfs(root.right), 0);
    res = Math.max(res, root.val + leftMax + rightMax);

    return root.val + Math.max(leftMax, rightMax);
  }
  dfs(root);
  return res;
};

let tree = new TreeNode(-10);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(maxPathSum(tree)); // 42