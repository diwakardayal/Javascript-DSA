class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

const MyStack = new Stack();
MyStack.push(10);
MyStack.push(20);
MyStack.push(30);
MyStack.push(40);
MyStack.peek();
console.log(MyStack.peek());
console.log(MyStack);
