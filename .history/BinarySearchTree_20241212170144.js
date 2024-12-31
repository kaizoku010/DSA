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
    this.count = 1;
  }

  size() {
    
   return this.count
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);

    const searchTree = node => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {searchTree(node.left);}
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {searchTree(node.right);}
      }
    };

    searchTree(this.root)
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  //deep first search
  //L1, L2, L1
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node);
      if (node.right) traverse(node.right);
    };
    traverse(this.root)
    return result;
  }

  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node);
      if (Node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root)

    return result;
  }

  dfsPostOrder() {
    let results = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node); // do we push the value or the whole
    };
    traverse(this.root)
    return results
  }


//breadth first search
  bfs() {

    let results = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {

      let currentNode = queue.shift();
      results.push(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return results;
  }


}

const bst = new BST(15);


bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log("binary search tree size: ", bst.size())
console.log("binary search tree min: ", bst.min())
console.log("binary search tree max: ", bst.min())
console.log("binary search contains 2: ", bst.contains(2))
console.log("binary search tree contains 9: ", bst.contains(9))
console.log("binary search tree deepth first search InOrder: ", bst.dfsInOrder())
console.log("binary search tree deepth first search PreOrder: ", bst.dfsPreOrder())
console.log("binary search tree deepth first search Post Order: ", bst.dfsPostOrder())

console.log("Breadth First Search: ")
console.log(bst.bfs())


//fibonaci vibes

const fib=n=>{
  if(n <= 2){
    
  }

}



