function findClosestValueInBst(tree, target, closest = Infinity) {
  if (tree === null) {
    return closest;
  } else {
    if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
      closest = tree.value;
    }

    if (target < tree.value) {
      return findClosestValueInBst(tree.left, target, closest);
    } else {
      return findClosestValueInBst(tree.right, target, closest);
    }
  }
}
