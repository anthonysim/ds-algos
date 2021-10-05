var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const queue = [root];
  const results = [];
  let temp;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};