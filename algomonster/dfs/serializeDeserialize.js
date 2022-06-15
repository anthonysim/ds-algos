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
}


function deserialize(data) {
  data = JSON.parse(data);

  if (data === null) return null;

  let root = new Node(data.shift());
  let queue = [root];

  while (data.length) {
    let node = queue.shift();

    // Left node
    let left = data.shift();
    if (left !== null) {
      node.left = new Node(left);
      queue.push(node.left);
    }

    // Right node
    let right = data.shift();
    if (right !== null) {
      node.right = new Node(right);
      queue.push(node.right);
    }
  }
  return root;
}