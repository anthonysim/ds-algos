// basically do a BFS then return a JSON.stringify version of the data
function serialize(root) {
  if (root === null) return null;

  let res = [];
  let queue = [root];

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

// do another BFS parse the incoming data check if its null, if so return null. Assign node.left and node.right accordingly.
function deserialize(data) {
  data = JSON.parse(data);

  if (data === null) return null;

  let root = new TreeNode(data.shift());
  let queue = [root];

  while (data.length) {
    let node = queue.shift();

    // Left node
    let left = data.shift();
    if (left !== null) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }

    // Right node
    right = data.shift();
    if (right !== null) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;
}
