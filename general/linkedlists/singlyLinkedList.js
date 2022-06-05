class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0;
  }

  // adds nodes to linkedlist
  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  // removes nodes from end of linkedlist
  pop() {
    let temp = null;
    let current = this.head;

    while (current.next) {
      temp = current;
      current = current.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // deletes head and moved it over
  shift() {
    if (this.head === null) {
      return null;
    } else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length -= 1;
    }

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  // add new head
  unshift(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  // get node at a specific position
  get(index) {
    if (this.head === null || index >= this.count) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  // update at a particular node
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // inserts node at a particular index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length += 1;
    return true;
  }

  // removes node from linkedlist
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }

  // reverses the order of linked list
  reverse() {
    let current = this.head;
    let prev = null;
    let temp = null;

    while (current) {
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    return prev;
  }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.reverse());
// list.set(2, "hello world!");
