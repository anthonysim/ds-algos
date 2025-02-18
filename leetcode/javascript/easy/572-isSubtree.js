function isSameTree(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;

  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

var isSubtree = function (s, t) {
  if (s === null) return false;
  if (isSameTree(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

// time: O(n * m) size of both trees multiplied to each other
// space: O(1)
