function isSameTree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (s === null || t === null) return s === null && t === null;
  if (s.val === t.val) {
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  }
  return false;
};

function isSubtree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (s === null) return false;
  if (isSameTree(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};