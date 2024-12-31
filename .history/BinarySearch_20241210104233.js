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
        return recursiveBinarySearch(array, itemToFind, startNumber, middleNumber - 1);
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

console.log("Binary search on breadth and depth first search using recrusive binary search tree. ")

//tree traversal and algorithms
//Breadth First Search
//bilding binary trees

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }

    size(){
        return this.count
    }

    insert(value){
        //takes in a value
        this.count++
        //create an new node with the value passed in
        let newNode = new Node(value)
        //compare value with the root node if its less or grater than if its less we left if its more we go right
        //we create a recursive fucntion to compare every node this will call its self when it see another node
        const searchTree = node =>{
            //if value < node.value, go left
            if(value < node.value){
                //if we look to the left and there is no node, we append a value at that postion,
                //if there is look left again at that position
                if(value < node.value){
                    if(!node.left){
                        node.left = newNode
                    }
                    //if there is a node...look left again to see if there is an open space
                    else {
                        //recursion happens here,
                        //call search tree again if there is a node on the left
                        searchTree(node.left)
                    }
                }
            }

            //if value > node.value, go right
            else if(value > node.value){

                //if there is no child on the right...append new node there
                    if(!node.right){
                        node.right = newNode
                    } 
                    // if the right child is occupied, look right again
                    else {
                        searchTree(node.right)
                    }
            }
        }

        searchTree(this.root)
    }

    min(){
//get the mininum value of a binary tree
/// all we have to do is sort the root and then travese left until we have visted all children

    }

    max(){

    }

    constains(){

    }

    //deepth First Search

    //in-order
    dfsInOrder(){

    }

    //pre-order
    dfsPreOrder(){

    }

    //post-order
    dfsPostOrder(){

    }

    //breath first search
    bfs(){

    }
}
