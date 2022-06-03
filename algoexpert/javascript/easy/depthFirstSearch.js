class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // this was the function that was filled out!
  depthFirstSearch(arr) {
    if (this === null) return [];

    function dfs(node) {
      arr.push(node.name);

      for (let child of node.children) {
        dfs(child);
      }
    }
    dfs(this);
    return arr;
  }
}