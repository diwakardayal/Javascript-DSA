class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  traverse() {
    let arr = [];

    while (this.top !== this.bottom) {
      arr.push(this.top);
      this.top = this.top.next;

      console.log(`--Starting--`);
      console.log(this.top);
    }

    return this;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

console.clear();
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
// myStack.peek();
// myStack.pop();
// myStack.traverse();

console.log(myStack);
