var serialize = function (root) {
  if (root === null) return null;

  const queue = [root];
  let res = [];

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push(null);
    }
  }
  return JSON.stringify(res);
};

var deserialize = function (data) {
  data = JSON.parse(data);

  if (data === null) return null;

  let root = new TreeNode(data.shift());
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    let left = data.shift();
    let right = data.shift();

    if (left !== null) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }

    if (right !== null) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;
};
