function treeMaxDepth(root) {
  if (root === null) return 0;

  return Math.max(treeMaxDepth(root.left), treeMaxDepth(root.right)) + 1;
}

// time: O(n)
// space: O(n)