function branchSums(node, total = 0, res = []) {
  if (!node) return;
  total += node.value;

  if (!node.left && !node.right) {
    res.push(total);
  }
  branchSums(node.left, total, res);
  branchSums(node.right, total, res);
  return res;
}