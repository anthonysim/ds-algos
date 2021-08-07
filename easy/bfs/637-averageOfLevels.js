var averageOfLevels = function (root) {
  const arr = [root];
  const results = [];

  while (arr.length) {
    let total = 0;
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      const node = arr.shift();
      total += node.val;

      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
    let average = total / length;
    results.push(average);
  }
  return results;
};