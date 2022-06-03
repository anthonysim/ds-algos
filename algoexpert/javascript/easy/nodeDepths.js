function nodeDepths(root) {
  let queue = [root];
  let total = null;
  let depth = 0;

  while (queue.length) {
    let len = queue.length;
    total += depth * len;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth += 1;
  }
  return total;
}