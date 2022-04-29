class Queue {
  constructor() {
    this.S1 = [];
    this.S2 = [];
    this.S1Length = 0;
    this.S2Length = 0;
  }

  push(value) {
    let i = 0;

    if (this.S2Length !== 0) {
      // while (this.S2Length !== 0) {
      //   this.S1.push(this.S2[this.S1Length - 1]);
      //   this.S2.pop();
      //   this.S2Length--;
      //   this.S1Length++;
      //   i++;
      // }

      this.s2TOs1();
    }
    this.S1.push(value);
    this.S1Length++;

    return this;
  }

  pop() {
    if (this.S1Length === 0 && this.S2Length === 0) {
      return `Nothing to pop`;
    }
    // let i = 0;
    // if (this.S1Length !== 0) {
    //   while (this.S1Length !== 0) {
    //     this.S2.push(this.S1[this.S1Length - 1]);
    //     this.S1.pop();
    //     this.S1Length--;
    //     this.S2Length++;
    //   }
    // }
    if (this.S1Length !== null) {
      this.s1TOs2();
    }

    this.S2.pop();
    this.S2Length--;

    return this;
  }
  s1TOs2() {
    let i = 0;

    while (this.S1Length !== 0) {
      this.S2.push(this.S1.pop());

      this.S1Length--;
      this.S2Length++;
      i++;
    }
    return this;
  }

  s2TOs1() {
    let i = 0;

    while (this.S2Length !== 0) {
      this.S1.push(this.S2.pop());
      this.S2Length--;
      this.S1Length++;
      i++;
    }

    return this;
  }

  print() {
    console.log(`PRINTING STACK S1`);
    for (const element of this.S1) {
      console.log(element);
    }
    console.log(`PRINTING STACK S2`);
    for (const element of this.S2) {
      console.log(element);
    }
  }

  top() {
    if(this.S1Length !==0 && this.S2Length !== 0)
    {
this.s2TOs1()
    }
    return this.S1[this.S1Length - 1];
  }
  bottom() {
    if (this.S2Length !== 0 && this.S1Length === 0) {
      return this.S2[this.S2Length - 1];
    } else {
      this.s1TOs2();
      return this.S2[this.S2Length - 1];
    }
  }
}

console.clear();
const myQ = new Queue();
myQ.push(10);
myQ.push(20);
myQ.push(30);
myQ.push(40);
myQ.push(50);
// myQ.pop();
console.log(myQ);
myQ.print();

console.log(`top->` + myQ.top());
console.log(`bottom->` + myQ.bottom());

console.log(`----`);
console.log(myQ.print());
