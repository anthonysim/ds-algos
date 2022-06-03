def validateBst(tree):
    def dfs(node, min, max):
        if node == None:
            return True
        if node.value < min or node.value >= max:
            return False

        return dfs(node.left, min, node.value) and dfs(node.right, node.value, max)

    return dfs(tree, float('-inf'), float('inf'))
