function findHeight(node) {
  if (node == null) return 0;

  return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
}


function isBalanced(root) {
  if (root === null) return true;

  const left = findHeight(root.left);
  const right = findHeight(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};