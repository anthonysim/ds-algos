public class Solution
{
  public Node CloneGraph(Node node)
  {
    if (node == null) return null;

    var visited = new Dictionary<int, Node>();

    Node DFS(Node currentNode)
    {
      if (visited.ContainsKey(currentNode.val))
      {
        return visited[currentNode.val];
      }

      // Clone the current node
      var clone = new Node(currentNode.val);
      visited[currentNode.val] = clone;

      // Recursively clone neighbors
      foreach (var neighbor in currentNode.neighbors)
      {
        clone.neighbors.Add(DFS(neighbor));
      }

      return clone;
    }

    return DFS(node);
  }
}