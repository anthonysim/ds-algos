class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.storage[this.tail] = item;
    this.tail += 1;

    return this.storage;
  }

  dequeue() {
    if (Object.keys(this.storage).length === 0) {
      this.head = 0;
      this.tail = 0;

      return "storage is empty!";
    }

    let deleteItem = this.storage[this.head];
    delete this.storage[this.head];
    this.head += 1;

    return deleteItem;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();

console.log(queue);