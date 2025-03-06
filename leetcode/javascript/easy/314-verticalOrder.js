var verticalOrder = function (root) {
  if (root === null) return [];
  let table = new Map();
  const queue = [{ node: root, col: 0 }];

  let minCol = 0;
  let maxCol = 0;

  while (queue.length) {
    const { node, col } = queue.shift();

    if (!table.has(col)) {
      table.set(col, []);
    }

    table.get(col).push(node.val);

    if (node.left) {
      queue.push({ node: node.left, col: col - 1 });
      minCol = Math.min(minCol, col - 1);
    }

    if (node.right) {
      queue.push({ node: node.right, col: col + 1 });
      maxCol = Math.max(maxCol, col + 1);
    }
  }

  const res = [];
  for (let i = minCol; i <= maxCol; i++) {
    res.push(table.get(i));
  }
  return res;
};
