function isSymmetric(root) {
  if (root === null) return true;

  function traverse(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    return traverse(node1.left, node2.right) && traverse(node1.right, node2.left);
  }
  return traverse(root.left, root.right);
};