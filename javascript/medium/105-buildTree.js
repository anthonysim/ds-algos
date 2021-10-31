function buildTree(preorder, inorder) {
  function tree(pre, in) {
    if (pre.length === 0) return null;

    const node = new TreeNode(pre[0]);
    const index = in.indexOf(pre[0]);

    node.left = tree(pre.slice(1, index + 1), in.slice(0, index));
    node.right = tree(pre.slice(index + 1), in.slice(index + 1));
    return node;
  }

  return tree(preorder, inorder);
};