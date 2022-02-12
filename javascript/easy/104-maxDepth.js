var maxDepth = function (root) {
  if (root === null) {
    return null;
  }

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth += 1;
  }
  return depth;
};

// Time Complexity O(n), touches every single node and edge.
// Space Complexity O(n), every node gets stored in the queue.