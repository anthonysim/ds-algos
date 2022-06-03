class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(arr) {
    let queue = [this];

    while (queue.length) {
      let node = queue.shift();
      arr.push(node.name);

      for (let child of node.children) {
        queue.push(child);
      }
    }
    return arr;
  }
}
