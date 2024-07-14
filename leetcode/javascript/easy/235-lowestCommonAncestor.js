var lowestCommonAncestor = function (root, p, q) {
  let current = root;

  while (current) {
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else {
      return current;
    }
  }
};

// Time Complexity: O(N)O(N), where NN is the number of nodes in the BST. In the worst case we might be visiting all the nodes of the BST.

// Space Complexity: O(N)O(N). This is because the maximum amount of space utilized by the recursion stack would be NN since the height of a skewed BST could be NN.