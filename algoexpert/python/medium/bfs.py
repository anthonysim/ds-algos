class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def breadthFirstSearch(self, arr):
        queue = [self]
        while len(queue):
            node = queue.pop(0)
            arr.append(node.name)

            for child in node.children:
                queue.append(child)

        return arr
