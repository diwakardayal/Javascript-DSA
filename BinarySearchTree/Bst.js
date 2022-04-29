class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // LEFT
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // RIGHT
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

console.clear()
const myBST = new BST();
myBST.add(10);
myBST.add(20);
myBST.add(30);
console.log(myBST)

// OLDER

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//     this.count = 0;
//   }

//   add(value) {
//     var newNode = new Node(value);
//     if (this.count === 0) {
//       this.root = newNode;

//       this.count++;
//       return this;
//     } else {
//       const currenNode = this.root;
//       newNode.left = newNode;
//       this.count++;
//     }

//     return this;
//   }

//   CN(currentNode) {
//     const newNode = new Node(value);
//     const currenNode = this.root;

//     if (!this.root) {
//       this.root = newNode;
//       return null;
//     } else {
//       if (newNode.value > currentNode.value) {
//         this.CN(currentNode.right);
//       } else if (newNode.value < currenNode.value) {
//         this.CN(currentNode.left);
//       } else if (newNode.value === currenNode.value) {
//         return `YOU FOUND IT`;
//       }
//     }
//   }

//   fun(value) {
//     const newNode = new Node(value);
//     const currentNode = newNode;
//     let counter = 0;
//     while (counter !== 0) {
//       if (!this.root) {
//         this.root = newNode;
//         counter++;
//         return null;
//       } else {
//         if (currentNode.value) {
//         }
//       }
//       counter++;
//     }
//   }
// }

// console.clear();
// const myTree = new BST();
// // myTree.add(10);
// // myTree.add(20);
// myTree.CN(99);
// console.log(myTree);
