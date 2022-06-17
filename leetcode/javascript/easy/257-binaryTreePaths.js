var binaryTreePaths = function (root) {
  let result = [];

  function dfs(root, currentPath) {
    if (root == null) return;

    if (root.left == null && root.right == null) {
      currentPath += root.val;
      result.push(currentPath);
      return;
    }
    dfs(root.left, currentPath + root.val + "->");
    dfs(root.right, currentPath + root.val + "->");
  }
  dfs(root, "");
  return result;
};

// time: O(N)
// space: O(log(N))