function inOrderTraverse(tree, arr) {
  const res = [];

  function dfs(node) {
    if (node.left) dfs(node.left);
    res.push(node.value);
    if (node.right) dfs(node.right);
  }
  dfs(tree);
  return res;
}

function preOrderTraverse(tree, arr) {
  const res = [];

  function dfs(node) {
    res.push(node.value);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(tree);
  return res;
}

function postOrderTraverse(tree, arr) {
  const res = [];

  function dfs(node) {
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    res.push(node.value);
  }
  dfs(tree);
  return res;
}