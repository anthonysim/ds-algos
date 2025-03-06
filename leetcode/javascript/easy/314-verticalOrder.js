var verticalOrder = function (root) {
  if (root === null) return [];

  const columnTable = new Map();
  const queue = [{ node: root, col: 0 }];

  let minCol = 0;
  let maxCol = 0;

  while (queue.length > 0) {
    const { node, col } = queue.shift();

    if (!columnTable.has(col)) {
      columnTable.set(col, []);
    }
    columnTable.get(col).push(node.val);

    if (node.left) {
      queue.push({ node: node.left, col: col - 1 });
      minCol = Math.min(minCol, col - 1);
    }

    if (node.right) {
      queue.push({ node: node.right, col: col + 1 });
      maxCol = Math.max(maxCol, col + 1);
    }
  }

  const result = [];
  for (let i = minCol; i <= maxCol; i++) {
    result.push(columnTable.get(i));
  }

  return result;
};
