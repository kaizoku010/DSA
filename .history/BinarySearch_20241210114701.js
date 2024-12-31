const recursiveBinarySearch = (array, itemToFind, startNumber, endNumber) => {
  // Base case: if the range is invalid, the item is not in the array
  if (startNumber > endNumber) return false;

  // Calculate the midpoint
  let middleNumber = Math.floor((startNumber + endNumber) / 2);

  // Check if the middle number is the item we're looking for
  if (array[middleNumber] === itemToFind) {
    return true;
  }

  // If the middle number is greater than the item, search in the left half
  if (array[middleNumber] > itemToFind) {
    return recursiveBinarySearch(
      array,
      itemToFind,
      startNumber,
      middleNumber - 1
    );
  }

  // If the middle number is less than the item, search in the right half
  return recursiveBinarySearch(array, itemToFind, middleNumber + 1, endNumber);
};

// Test the function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const itemToFind = 3;

if (recursiveBinarySearch(array, itemToFind, 0, array.length - 1)) {
  console.log("The binary search has found your item:", itemToFind);
} else {
  console.log("Sorry, the number wasn't found.");
}

console.log(
  "Binary search on breadth and depth first search using recrusive binary search tree. "
);

//tree traversal and algorithms
//Breadth First Search
//bilding binary trees

console.log("Binary search tree (BST)");
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }

  insert(value) {
    //takes in a value
    this.count++;
    //create an new node with the value passed in
    let newNode = new Node(value);
    //compare value with the root node if its less or grater than if its less we left if its more we go right
    //we create a recursive fucntion to compare every node this will call its self when it see another node
    const searchTree = (node) => {
      //if value < node.value, go left
      if (value < node.value) {
        //if we look to the left and there is no node, we append a value at that postion,
        //if there is look left again at that position
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          }
          //if there is a node...look left again to see if there is an open space
          else {
            //recursion happens here,
            //call search tree again if there is a node on the left
            searchTree(node.left);
          }
        }
      }

      //if value > node.value, go right
      else if (value > node.value) {
        //if there is no child on the right...append new node there
        if (!node.right) {
          node.right = newNode;
        }
        // if the right child is occupied, look right again
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    //get the mininum value of a binary tree
    // all we have to do is sort the root and then travese left until we have visted all children
    //the operation happens on on the left because thats where the lowest values are found

    let currentNode = this.root;
    //set the current node to the left nodes only
    //the lowest or smallest values in a binary tree is always the last node on the left,
    // so we travse the list until we reach the last node.
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    //find the biggest number in a BST
    let currentNode = this.root;
    //travese the tree from the right (postive numbers)
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  //searching the BST
  constains(value) {
    //this takes in a value an checks if its in the tree
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      //if the value or target is les than the current node, the look left
      if (value < currentNode.value) {
        //set the current node to the left
        currentNode = currentNode.left;
      } else {
        //else if the value/target is greater than currentNode.value
        //set the current node to the right
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //deepth First Search - locaking branch by branch

  //in-order
  dfsInOrder() {
    //we process (left node) (root node) (right node)

    let result = [];
    const travese = (node) => {
      if (node.left) travese(node.left);
      result.push(node.value);
      if (node.right) travese(node.right);
    };
    return result;
  }

  //pre-order
  dfsPreOrder() {
    //we process (root node) ( left node) (right node.)

    let result = []
    const travese =(node)=>{
  result


        
    }

    return result 
  }

  //post-order
  dfsPostOrder() {
    // left root right
  }

  //breath first search
  //level by level
  //and we shall be using queues
  bfs() {}
}
