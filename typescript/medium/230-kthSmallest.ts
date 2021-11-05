class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) return -1;
  const res: number[] = [];
  function dfs(node: TreeNode) {
    if (node.left) dfs(node.left);
    res.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res[k - 1];
};