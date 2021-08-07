var minDepth = function (root) {
  let level = 1;
  let arr = [root];

  if (root === null) {
    return null;
  }

  while (arr.length) {
    let len = arr.length;
    let total = 0;
    for (let i = 0; i < len; i++) {
      let node = arr.shift();

      if (node.left === null && node.right === null) {
        return level;
      }
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
    level += 1;
  }
  return level;
};