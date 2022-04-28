class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null,
    };
    let counter = 0;
    let currentNode = this.head;
    let prevNode;

    if (index >= this.length) {
      return this.append(value);
    } else {
      currentNode = this.traverse(index);
      newNode.next = currentNode;
      prevNode = this.traverse(index - 1);
      console.log(`==============`);
      console.log(prevNode);
      console.log(`===============`);
      prevNode.next = newNode;
    }
    return this;
  }
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;

      counter++;
    }
    return currentNode;
  }

  delete(index) {
    const currentNode = this.traverse(index);
    const prevNode = this.traverse(index - 1);
    const postNode = this.traverse(index + 1);

    prevNode.next = postNode;
    this.length--;
    return this;
  }

  reverse() {
    console.log(`==`)
    console.log(this.tail);
    console.log(`==`)
    this.tail = this.head;
    
    while (this.tail.next !== null) {
      this.tail = this.tail.next;
      console.log(`-->`)
      console.log(this.tail);
      console.log(`-->`)
    }
    console.log(this.tail);
  }
  weird(){
    while(this.head.next !==null){

      this.head.next = this.head
    }
    console.log(this.head)
    return this
    
  }
}

console.clear();
const MyLL = new LinkedList(10);
MyLL.append(20);
MyLL.prepend(30);
MyLL.insert(3, 140);
MyLL.printList();
// MyLL.delete(1);
console.log(`--->`);
MyLL.printList();
// MyLL.weird()
// MyLL.printList();
console.log(MyLL)
