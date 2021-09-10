def isValidBST(root):
    def dfs(node, min, max):
        if node == None:
            return True
        if node.val <= min or node.val >= max:
            return False
        return dfs(node.left, min, node.val) and dfs(node.right, node.val, max)

    return dfs(root, float('-inf'), float('inf'))
