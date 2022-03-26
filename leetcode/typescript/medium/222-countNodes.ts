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

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  let queue = [root];
  let count: number = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      count += 1;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return count;
};