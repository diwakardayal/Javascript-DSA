class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.next = newNode;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    const holdingPoint = this.last;
    this.last = holdingPoint.next;
    this.length--;
  }
  peek() {
    return this.first;
  }
}
console.clear();
const MyQueue = new Queue(10);
MyQueue.enqueue(10);
MyQueue.enqueue(20);
MyQueue.enqueue(30);
MyQueue.enqueue(40);
MyQueue.enqueue(50);
MyQueue.enqueue(60);
// console.log(MyQueue);
// MyQueue.dequeue()
console.log(MyQueue);
