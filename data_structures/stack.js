class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  add(item) {
    this.storage[this.count] = item;
    this.count += 1;

    return this.storage;
  }

  delete() {
    if (Object.keys(this.storage).length === 0) {

      return "storage is empty!";
    }

    let deleteItem = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count -= 1;

    return deleteItem;
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.delete();
stack.delete();

console.log(stack);
