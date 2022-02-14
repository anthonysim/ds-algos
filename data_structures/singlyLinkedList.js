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
  // removes nodes to linkedlist
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
}

let list = new LinkedList();
list.push('HELLO');
list.push('GOODBYE');

console.log(list);