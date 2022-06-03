def invertBinaryTree(root):
    queue = [root]

    while len(queue):
        for item in queue:
            node = queue.pop(0)

            temp = node.left
            node.left = node.right
            node.right = temp

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    return root
