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

  look(value) {
    let currentNode = this.root;

    while (currentNode) {
      
      if(value < currentNode.left){
        // left - left
        currentNode = currentNode.left.left;
      }
      else if(value > currentNode.left){
        // left - right

        currentNodeNode = currentNode.left.right;
      }

      
    }
    return false;
  }

  savedPoint(value) { //value = 30
    
    let currentNode = this.root;
   
    while (currentNode) {
      if (value < currentNode.left) {
        currentNode = currentNode.left;
      } else if (value > currentNode.right) {
        currentNode = currentNode.right;
      } else    {
        // return true;
        return currentNode.value;
      }
    }
  }

  remove(value) {}
}

console.clear();
const myBST = new BST();
myBST.add(10);
myBST.add(20);
myBST.add(30);
console.log(myBST.look(30))
console.log(myBST.savedPoint(10));
console.log(myBST);

// OLDER

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.right = null;
//     this.left = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (1) {
//         if (value < currentNode.value) {
//           // LEFT
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }

//           currentNode = currentNode.left;
//         }
//         // RIGHT
//         else {
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }

//   look(value) {
//     let currentNode = this.root;
//     while (1) {
//       if (value > currentNode.value) {
//         currentNode = currentNode.right;
//         if(!currentNode.right){
//           return currentNode
//         }
//       } else if (value < currentNode.value) {
//         currentNode = currentNode.left;
//         if(!currentNode.left){
//           return currentNode
//         }
//       } else if (value === currentNode.value) {
//         console.log(`YEP its here`)
//         return currentNode
//       }else{
//         console.log(`NOPE itnot here`)
//         return currentNode
//       }
//     }
//   }

//   remove(value){
//     const newNode = this.look(value);

//   }
// }
// console.clear();
// const myTree = new BST();
// myTree.insert(10);
// myTree.insert(20);
// myTree.insert(9);
// myTree.insert(11);
// console.log(myTree.look(1))

// console.log(myTree);
