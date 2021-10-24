function countNodes(root) {
  if (root === null) return 0;

  let queue = [root];
  let count = 0;
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      count += 1;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return count;
};