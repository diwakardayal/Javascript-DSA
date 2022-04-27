class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    let array = [];

    while (currentNode.next !== null) {
      array.push(
        `${currentNode.prev} ${currentNode.value} ${currentNode.next}`
      );

      currentNode = currentNode.next;
    }
    console.log(array);
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else {
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
      let currentNode = this.traverse(index);
      let PrevNode = this.traverse(index - 1);
      currentNode.prev = newNode;
      PrevNode.next = newNode;

      newNode.next = currentNode;
      newNode.prev = PrevNode;
      this.length++;
    }
    return this;
  }

  traverse(index) {
    let currentNode = this.head;
    let counter = 0;
    while (index !== counter) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

console.clear();
console.log(`===============PURGING======= == ==`);
const MyLL = new DoubleLinkedList(10);
MyLL.append(20);
MyLL.append(30);
MyLL.append(40);
MyLL.append(50);
MyLL.prepend(5);
MyLL.printList();
MyLL.insert(2, 1);
console.log(`printing after insert`);
MyLL.printList();
console.log(MyLL);
console.log(`===============PURGING============  `);
